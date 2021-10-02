import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import GoogleLogout from "react-google-login";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "components/loader/index";
import { AuthContext } from "../../context/authContext";
import banner from "assets/images/banner_1200.jpg";
import climate1 from "assets/images/climate1.jpg";
import climate2 from "assets/images/climate2.jpg";
import climate3 from "assets/images/climate3.jpg";
import climate4 from "assets/images/climate4.jpg";
import climate5 from "assets/images/climate5.jpg";
import climate6 from "assets/images/climate6.jpg";
import "./index.scss";


class Header extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            search: "",
        };
    }

    componentDidMount() {
        const { isSeller } = this.context;
    }

    successResponseGoogle = () => {
        const { dispatch, jwtDispatch, userDispatch } = this.context;

        dispatch({ type: "LOGIN-LOGOUT" });
        jwtDispatch({ type: "JWT-TOKEN", token: "" });
        userDispatch({ type: "USER-DETAILS", res: null });

        this.props.history.push("/login");
    };

    searchForum = (e) => {
        this.props.history.push("/discover");
    };

    searchChange = (e) => {
        this.setState({ search: e.target.value });
    };

    enterKey = (e) => {
        if (e.code === "Enter") {
            this.hitSearch();
        }
    };

    hitSearch = (e) => {
        const {dispatchSearch} = this.props.context
        dispatchSearch({ type: "SEARCH-HOME", res: this.state.search })
        this.setState({ search: '' });
    };

    render() {
        const { isAuthenticated, isSeller, isWatsonDiscovery, userDetails } =
            this.context;
        const { search } = this.state;
        const profilePath = {
            pathname: "/profile",
            param: "edit",
        };
        const changePassword = {
            pathname: "/settings",
            param: "security",
        };
        return (
            <header
                style={{ height: isWatsonDiscovery ? "80px" : "280px" }}
                className="ds-header app-logged-in"
            >
                {this.state.pageLoading ? <Loading /> : ""}
                {!isWatsonDiscovery && (
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={5000}
                    >
                        <div>
                            <img src={banner} alt="banner image" />
                        </div>
                        <div>
                            <img src={climate1} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate4} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate2} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate5} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate3} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate6} alt="climate image" />
                        </div>
                    </Carousel>
                )}
                <nav className="navbar large-nav-menu">
                    <Link className="logo" title="Greenytale logo" to="/">
                        <span>Greenytale logo</span>
                    </Link>
                    {!isWatsonDiscovery && (
                        <div className="hero">
                            <h1>Sustainable Consumption and Production</h1>
                            <button
                                className="btn sub-header"
                                title="Watson header"
                                onClick={this.searchForum}
                            >
                                Watson AI Search Forum
                            </button>
                        </div>
                    )}
                </nav>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/about-us"
                                title="About Us"
                                onClick={this.onClick}
                            >
                                About us
                            </Link>
                        </li>
                        {isSeller && (
                            <li>
                                <Link
                                    title="Design Corner"
                                    to={''}
                                    aria-haspopup="true"
                                    onClick={this.onClick}
                                >
                                    Seller Corner
                                </Link>
                                <ul>
                                    <li>
                                        <Link
                                            title="Seller account"
                                            to="/seller"
                                        >
                                            View Account
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            title="Sub link 3"
                                            href="javascript:void(0)"
                                            aria-haspopup="true"
                                        >
                                            {" "}
                                            Products
                                        </a>
                                        <ul>
                                            <li>
                                                <Link
                                                    title="Upload Items"
                                                    to="/seller-upload"
                                                >
                                                    Upload Items
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    title="Sub Sub link 2"
                                                    href="javascript:void(0)"
                                                    onClick={this.onClick}
                                                >
                                                    {" "}
                                                    Modify Existing Products
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        )}
                        <li>
                            <a
                                title="Products"
                                href="javascript:void(0)"
                                aria-haspopup="true"
                                onClick={this.onClick}
                            >
                                Products
                            </a>
                            <ul>
                                <li>
                                    <a
                                        title="Sub link 1"
                                        href="javascript:void(0)"
                                        onClick={this.onClick}
                                    >
                                        {" "}
                                        Sub Link 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Sub link 2"
                                        href="javascript:void(0)"
                                        onClick={this.onClick}
                                    >
                                        {" "}
                                        Sub Link 2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link title="Contact Us" to="/about-us#contact">
                                Contact Us
                            </Link>
                        </li>
                        {this.props.history?.location?.pathname === "/" && (
                            <li className="product-search">
                                <div className="header-search">
                                    <div className="input-field first-wrap">
                                        <div className="input-select">
                                            <select
                                                data-trigger=""
                                                name="choices-single-defaul"
                                                className="choices-single-defaul"
                                            >
                                                <option placeholder="">
                                                    Category
                                                </option>
                                                <option>New Arrivals</option>
                                                <option>
                                                    Eco friendly only
                                                </option>
                                                <option>Her/She</option>
                                                <option>Him/He</option>
                                                <option>Clothing</option>
                                                <option>Footwear</option>
                                                <option>Electronics</option>
                                                <option>
                                                    Domestic appliances
                                                </option>
                                                <option>Accessories</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-field second-wrap">
                                        <input
                                            id="search"
                                            type="text"
                                            value={search}
                                            placeholder="Search products"
                                            onKeyUp={this.enterKey}
                                            onChange={this.searchChange}
                                        />
                                    </div>
                                    <div className="input-field third-wrap">
                                        <button
                                            className="btn-search"
                                            type="button"
                                            onClick={this.hitSearch}
                                        >
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        )}

                        <li className="home-cart">
                            <Link title="Cart" to="/cart">
                                <FaShoppingCart />
                            </Link>
                        </li>

                        {isAuthenticated ? (
                            <li className="profile-menu">
                                <ul className="profile-wrapper">
                                    <li>
                                        <div className="profile">
                                            {userDetails?.imgUrl ? (
                                                <img
                                                    src={userDetails?.imgUrl}
                                                    alt="user_img"
                                                />
                                            ) : (
                                                <FaUserAlt />
                                            )}
                                            <Link
                                                to="/profile"
                                                title="Profile"
                                                className="name"
                                            >
                                                {userDetails?.user_name?.toUpperCase()}
                                            </Link>

                                            <ul className="menu">
                                                <li>
                                                    <Link to={profilePath}>
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/settings">
                                                        Settings
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={changePassword}>
                                                        Change Password
                                                    </Link>
                                                </li>
                                                <li>
                                                    <GoogleLogout
                                                        clientId={
                                                            process.env
                                                                .REACT_APP_GOOGLE_CLIENT
                                                        }
                                                        buttonText="Logout with Google"
                                                        render={(
                                                            renderProps
                                                        ) => {
                                                            return (
                                                                <a
                                                                    onClick={
                                                                        renderProps.onClick
                                                                    }
                                                                    href="#"
                                                                >
                                                                    Logout
                                                                </a>
                                                            );
                                                        }}
                                                        style={{
                                                            transform:
                                                                "scale(0.7)",
                                                        }}
                                                        onSuccess={
                                                            this
                                                                .successResponseGoogle
                                                        }
                                                        onFailure={
                                                            this
                                                                .failureResponseGoogle
                                                        }
                                                    ></GoogleLogout>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li className="login-li">
                                <Link title="Login" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
