import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import Roles from "constants/roles";
import "./index.scss";

class Settings extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            user_name: "",
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            errorMsg: "",
            successMsg: "",
        };
        this.security = React.createRef();
        this.profile = React.createRef();
    }

    componentDidMount() {
        const { isAuthenticated } = this.context;
        if (!isAuthenticated) {
            this.props.history.push("/login");
        }
        window.scrollTo(0, 280);

        if (this.props.history?.location?.param === "security") {
            this.security.current.click();
        } else {
            // window.scrollTo(0, this.profile.current.offsetTop + 100);
        }
    }

    changeInput = (e) => {
        console.log(e, e.target.id, e.target.value);
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    sellerAccount = async e => {
        e.preventDefault();
        this.setState({ pageLoading: true });
        const { userDetails, userDispatch, dispatchSeller } =
            this.context;
        const request = {
            user_ID: userDetails.user_ID,
            RoleID: Roles.SELLER
        };
        try {
            const res = await Core.updateUser(request);
            if (res) {
                this.setState({ errorMsg: "" });

                delete res.token;
                if (userDetails.imgUrl) {
                    res.imgUrl = userDetails.imgUrl;
                }

                userDispatch({ type: "USER-DETAILS", res });
                const checkStatus = res.role.find(v => v.Name === 'SELLER')['ActiveStatus']

                this.setState({
                    successMsg: "Seller account created successfully"
                });
                setTimeout(() => {
                    this.setState({ successMsg: "" }, () => {
                        dispatchSeller({ type: "IS-SELLER", res: checkStatus });
                        this.props.history.push("/");
                    });
                }, 1000);
            }
        } catch (error) {
            this.setState({ errorMsg: "Error creating account" });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    }

    handleSubmit = async (e, p) => {
        e.preventDefault();
        let msg;
        try {
            const { userDetails } = this.context;
            if (
                p === "password" &&
                userDetails.password !== this.state.oldPassword
            ) {
                msg = "Old password incorrect";
                throw new Error(msg);
            } else if (
                p === "password" &&
                this.state.newPassword !== this.state.confirmPassword
            ) {
                msg = "New and confirm passwords don't match";
                throw new Error(msg);
            }
            const request =
                p !== "password"
                    ? {
                          user_ID: userDetails.user_ID,
                          user_name: this.state.user_name,
                      }
                    : {
                          user_ID: userDetails.user_ID,
                          password: this.state.newPassword,
                      };
            this.setState({ pageLoading: true });
            const res = await Core.updateUser(request);
            if (res) {
                this.setState({
                    errorMsg: "",
                    user_name: "",
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                });
                this.setState({
                    successMsg:
                        p !== "password"
                            ? "Username updated successfully"
                            : "Password changed successfully",
                });
                setTimeout(() => {
                    this.setState({ successMsg: "" });
                }, 3000);
                this.updateSuccess(res);
            }
        } catch (error) {
            this.setState({
                errorMsg: p !== "password" ? "Error updating username" : msg,
            });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    };

    updateSuccess = (res) => {
        const { userDispatch, userDetails } = this.context;

        delete res.token;
        if (userDetails.imgUrl) {
            res.imgUrl = userDetails.imgUrl;
        }
        userDispatch({ type: "USER-DETAILS", res });
    };

    deleteAccount = async (e) => {
        e.preventDefault();
        this.setState({ pageLoading: true });
        const { userDetails, dispatch, jwtDispatch, userDispatch } =
            this.context;
        const request = {
            user_ID: userDetails.user_ID,
        };
        try {
            const res = await Core.deleteUser(request);
            if (res) {
                this.setState({ errorMsg: "" });
                dispatch({ type: "LOGIN-LOGOUT" });
                jwtDispatch({ type: "JWT-TOKEN", token: "" });
                userDispatch({ type: "USER-DETAILS", res: null });
                this.props.history.push("/login");
            }
        } catch (error) {
            this.setState({ errorMsg: "Error deleting account" });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    };

    render() {
        const { userDetails, isSeller } = this.context;
        const {
            user_name,
            pageLoading,
            oldPassword,
            newPassword,
            confirmPassword,
            errorMsg,
            successMsg,
        } = this.state;
        const profilePath = {
            pathname: "/profile",
            param: "edit",
        };

        return (
            <div className="page-settings">
                {pageLoading ? <Loading /> : ""}
                <div className="container">
                    <h1 className="page-settings-header">Seller</h1>
                    <div className="row gutters-sm">
                        <div className="col-md-4 d-none d-md-block">
                            <div className="card">
                                <div className="card-body">
                                    <nav className="nav flex-column nav-pills nav-gap-y-1">
                                        <a
                                            href="#profile"
                                            ref={this.profile}
                                            data-toggle="tab"
                                            className="nav-item nav-link has-icon nav-link-faded active"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user mr-2"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                            Profile Information
                                        </a>
                                        <a
                                            href="#account"
                                            data-toggle="tab"
                                            className="nav-item nav-link has-icon nav-link-faded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-settings mr-2"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="3"
                                                ></circle>
                                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                            </svg>
                                            Account Settings
                                        </a>
                                        <a
                                            href="#security"
                                            data-toggle="tab"
                                            ref={this.security}
                                            className="nav-item nav-link has-icon nav-link-faded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-shield mr-2"
                                            >
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                            Security
                                        </a>
                                        <a
                                            href="#notification"
                                            data-toggle="tab"
                                            className="nav-item nav-link has-icon nav-link-faded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-bell mr-2"
                                            >
                                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                            </svg>
                                            Notification
                                        </a>
                                        {
                                            !isSeller &&
                                            <a
                                                href="#seller"
                                                ref={this.profile}
                                                data-toggle="tab"
                                                className="nav-item nav-link has-icon nav-link-faded"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-user mr-2"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle
                                                        cx="12"
                                                        cy="7"
                                                        r="4"
                                                    ></circle>
                                                </svg>
                                                Seller Account
                                            </a>
                                        }
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header border-bottom mb-3 d-flex d-md-none">
                                    <ul
                                        className="nav nav-tabs card-header-tabs nav-gap-x-1"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <a
                                                href="#profile"
                                                data-toggle="tab"
                                                className="nav-link has-icon active"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-user"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle
                                                        cx="12"
                                                        cy="7"
                                                        r="4"
                                                    ></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#account"
                                                data-toggle="tab"
                                                className="nav-link has-icon"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-settings"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="3"
                                                    ></circle>
                                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#security"
                                                data-toggle="tab"
                                                className="nav-link has-icon"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-shield"
                                                >
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#notification"
                                                data-toggle="tab"
                                                className="nav-link has-icon"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-bell"
                                                >
                                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body tab-content">
                                    <div
                                        className="tab-pane active"
                                        id="profile"
                                    >
                                        <h6>YOUR PROFILE INFORMATION</h6>
                                        <hr />
                                        <form className="personal">
                                            <div className="form-group">
                                                <label htmlFor="fullName">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullName"
                                                    readOnly
                                                    aria-describedby="fullNameHelp"
                                                    placeholder="Enter your fullname"
                                                    value={
                                                        userDetails?.full_name
                                                    }
                                                />
                                                <small
                                                    id="fullNameHelp"
                                                    className="form-text text-muted"
                                                >
                                                    Your name may appear around
                                                    here where you are
                                                    mentioned. You can change or
                                                    remove it at any time.
                                                </small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullName"
                                                    readOnly
                                                    aria-describedby="fullNameHelp"
                                                    placeholder="Enter your username"
                                                    value={
                                                        userDetails?.user_name
                                                    }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="url">
                                                    Gender
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="url"
                                                    readOnly
                                                    placeholder="Enter your gender"
                                                    value={userDetails?.gender}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="location">
                                                    Date of Birth
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="location"
                                                    readOnly
                                                    placeholder="Enter your DOB"
                                                    value={userDetails?.dob}
                                                />
                                            </div>
                                            <div className="form-group small text-muted">
                                                All of the fields on this page
                                                are optional and can be deleted
                                                at any time, and by filling them
                                                out, you're giving us consent to
                                                share this data wherever your
                                                user profile appears.
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                <Link to={profilePath}>
                                                    Edit Profile
                                                </Link>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="account">
                                        <h6>ACCOUNT SETTINGS</h6>
                                        <hr />
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="user_name">
                                                    Change Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="user_name"
                                                    required
                                                    aria-describedby="usernameHelp"
                                                    placeholder="Enter your username"
                                                    onChange={this.changeInput}
                                                    value={user_name}
                                                />
                                                <small
                                                    id="usernameHelp"
                                                    className="form-text text-muted"
                                                >
                                                    After changing your
                                                    username, your old username
                                                    becomes available for anyone
                                                    else to claim.
                                                </small>
                                            </div>
                                            <button
                                                className="btn btn-info"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <hr />
                                            <div className="form-group">
                                                <label className="d-block text-danger">
                                                    Delete Account
                                                </label>
                                                <p className="text-muted font-size-sm">
                                                    Once you delete your
                                                    account, there is no going
                                                    back. Please be certain.
                                                </p>
                                            </div>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={this.deleteAccount}
                                            >
                                                Delete Account
                                            </button>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="security">
                                        <h6>SECURITY SETTINGS</h6>
                                        <hr />
                                        <form
                                            onSubmit={(e) =>
                                                this.handleSubmit(e, "password")
                                            }
                                        >
                                            <div className="form-group">
                                                <label className="d-block">
                                                    Change Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="oldPassword"
                                                    required
                                                    minLength="8"
                                                    value={oldPassword}
                                                    onChange={this.changeInput}
                                                    placeholder="Enter your old password"
                                                />
                                                <input
                                                    type="password"
                                                    className="form-control mt-1"
                                                    id="newPassword"
                                                    required
                                                    minLength="8"
                                                    value={newPassword}
                                                    onChange={this.changeInput}
                                                    placeholder="New password"
                                                />
                                                <input
                                                    type="password"
                                                    className="form-control mt-1"
                                                    id="confirmPassword"
                                                    required
                                                    minLength="8"
                                                    value={confirmPassword}
                                                    onChange={this.changeInput}
                                                    placeholder="Confirm new password"
                                                />
                                            </div>
                                            <button
                                                className="btn btn-info"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label className="d-block">
                                                    Two Factor Authentication
                                                </label>
                                                <button
                                                    className="btn btn-info"
                                                    type="button"
                                                >
                                                    Enable two-factor
                                                    authentication
                                                </button>
                                                <p className="small text-muted mt-2">
                                                    Two-factor authentication
                                                    adds an additional layer of
                                                    security to your account by
                                                    requiring more than just a
                                                    password to log in.
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="notification">
                                        <h6>NOTIFICATION SETTINGS</h6>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label className="d-block mb-0">
                                                    Security Alerts
                                                </label>
                                                <div className="small text-muted mb-3">
                                                    Receive security alert
                                                    notifications via email
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck1"
                                                    >
                                                        Email each time a
                                                        vulnerability is found
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck2"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck2"
                                                    >
                                                        Email a digest summary
                                                        of vulnerability
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <label className="d-block">
                                                    SMS Notifications
                                                </label>
                                                <ul className="list-group list-group-sm">
                                                    <li className="list-group-item has-icon">
                                                        Comments
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch1"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch1"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Updates From People
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch2"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch2"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Reminders
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch3"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch3"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Events
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch4"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch4"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Pages You Follow
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch5"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch5"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="seller">
                                        <h6>CREATE YOUR SELLER ACCOUNT</h6>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label className="d-block">
                                                    Seller account creation
                                                </label>
                                                <button
                                                    className="btn btn-info"
                                                    type="button"
                                                    onClick={this.sellerAccount}
                                                >
                                                    Click to Create your Seller
                                                    Account
                                                </button>
                                                <p className="small text-muted seller-des mt-2">
                                                    Seller account will enable
                                                    you to sell/promote any
                                                    material or products of any
                                                    kind which are eco-friendly,
                                                    recyclable, re-usable, and
                                                    would go a long way in
                                                    fostering healthy balance
                                                    between consumption and
                                                    production, and therby
                                                    combat cliate change.
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {!!errorMsg && (
                                    <div className="error-body">
                                        <span>{errorMsg}</span>
                                    </div>
                                )}
                                {!!successMsg && (
                                    <div className="success-body">
                                        <span>{successMsg}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
