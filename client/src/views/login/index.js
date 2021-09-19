import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleLogin from "react-google-login";
import { AuthContext } from "../../context/authContext";
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import { InputForm, Dropdown } from "../../components/form-inputs/index";
import logo from "assets/images/greenytale_1.png";
import "./index.scss";

const recaptchaRef = React.createRef();

class Login extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            errorMsg: "Invalid username or password",
            isLogin: true,
            isError: false,
            captchaToken: null,
            formData: {
                dob: "",
                email: "",
                gender: "Select",
                full_name: "",
                password: "",
                passwordRepeat: "",
                securityAnswer1: "",
                securityAnswer2: "",
                securityQuestion1: "Select",
                securityQuestion2: "Select",
                user_name: "",
            },
        };
    }

    componentDidMount() {
        const { isAuthenticated } = this.context;
        if (isAuthenticated) {
            this.props.history.push("/");
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault(); 
        this.setState({isError: false})
        const data = new FormData(e.target);

        const value = Object.fromEntries(data.entries());
        this.setState({ formData: value });
        delete value["g-recaptcha-response"];
        delete value["securityAnswer1"];
        delete value["securityAnswer2"];
        delete value["securityQuestion1"];
        delete value["securityQuestion2"];
        const {
            securityAnswer1,
            securityAnswer2,
            securityQuestion1,
            securityQuestion2,
        } = this.state.formData;
        const request = this.state.isLogin
            ? {
                  ...value,
              }
            : {
                  ...value,
                  secure_login_recovery: [
                      {
                          security_question_ID: securityQuestion1,
                          secure_answer: securityAnswer1,
                      },
                      {
                          security_question_ID: securityQuestion2,
                          secure_answer: securityAnswer2,
                      },
                  ],
              };

        this.setState({ pageLoading: true });
        try {
            const res = await Core[this.state.isLogin ? 'loginService' : 'signupService'](request);
            if (res) {
                this.loginSuccess(res);
            }
        } catch (error) {
            this.setState({isError: true})
            this.setState({errorMsg: "Error while registering. Try again."})
            handleError(error);
        }
        this.setState({ pageLoading: false });
    };

    handleInputChange = (e) => {
        const obj = { ...this.state.formData };
        obj[e.target.id] = e.target.value;
        this.setState({
            formData: obj,
        });
    };

    loginForm = () => {
        this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
        recaptchaRef.current.reset();
        this.setState({ captchaToken: null });
        this.setState({isError: false})
        this.resetForm();
    };

    resetForm() {
        const { formData } = this.state;
        // console.log(formData, this.state);
        for (let key in formData) {
            this.setState({
                [key]: "",
            });
            formData[key] = "";
        }
        this.setState({ formData });
    }

    captchaChange = (e) => {
        const captchaToken = recaptchaRef.current.getValue();
        this.setState({ captchaToken });
        this.setState({isError: false})
        // console.log("token", captchaToken);
    };

    successResponseGoogle = async (googleRes) => {
        this.setState({isError: false})
        const token = googleRes.getAuthResponse().id_token;

        const request = {
            user_name: googleRes.profileObj.email,
        };
        const headers = {
            googletoken: token,
        };

        this.setState({ pageLoading: true });
        try {
            const res = await Core.loginService(request, headers);
            if (res) {
                this.loginSuccess(res, googleRes);
            }
        } catch (error) {
            this.setState({isError: true})
            this.setState({errorMsg: "Invalid username or password"})
            handleError(error);
        }
        this.setState({ pageLoading: false });
    };

    loginSuccess = (res, googleRes = "") => {
        const { dispatch, jwtDispatch, dispatchSeller, userDispatch } = this.context;

        dispatch({ type: "LOGIN-LOGOUT" });
        jwtDispatch({ type: "JWT-TOKEN", token: res.token });
        delete res.token;
        res.imgUrl = googleRes?.profileObj?.imageUrl;
        const isSeller = res.role.find(seller => seller.Name === "SELLER")['ActiveStatus']
        dispatchSeller({ type: 'IS-SELLER', res: isSeller })
        userDispatch({ type: "USER-DETAILS", res });

        this.props.history.push("/");
    };

    failureResponseGoogle = (err) => {
        console.log(err);
    };

    goToHP = () => {
        this.props.history.push("/");
    }

    render() {
        const {isLogin, isError, errorMsg, pageLoading} = this.state
        return (
            <div>
                {pageLoading ? <Loading /> : ""}
                <div className="login-logo" onClick={this.goToHP}>
                    <img src={logo} alt="logo" />
                </div>
                <div className="signup__container" style={{height: isLogin ? '30rem' : '33rem'}}>
                    <div className="container__child signup__thumbnail">
                        <div className="thumbnail__content text-center">
                            <h3 className="heading--secondary">
                                Infinite growth of material consumption in a
                                finite world is an impossibility.
                            </h3>
                        </div>
                        <div className="signup__overlay"></div>
                    </div>
                    <div className="container__child signup__form">
                        {
                            isError && 
                            <div className="error-message" style={{top: isLogin ? '7%' : '0'}}>
                                {errorMsg}
                            </div>
                        }
                        <div className="formWrapper">
                            <form onSubmit={this.handleSubmit}>
                                {this.state.isLogin ? (
                                    <React.Fragment>
                                        <InputFormFn
                                            id="user_name"
                                            type="text"
                                            value={
                                                this.state.formData.user_name
                                            }
                                            placeholder="Enter your username/ email"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="password"
                                            type="password"
                                            value={this.state.formData.password}
                                            placeholder="Enter password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <InputFormFn
                                            id="full_name"
                                            type="text"
                                            value={
                                                this.state.formData.full_name
                                            }
                                            placeholder="Enter your name"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="user_name"
                                            type="text"
                                            value={
                                                this.state.formData.user_name
                                            }
                                            placeholder="Enter your username"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="email"
                                            type="text"
                                            value={this.state.formData.email}
                                            placeholder="Enter your email"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="password"
                                            type="password"
                                            value={this.state.formData.password}
                                            placeholder="Enter password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="passwordRepeat"
                                            type="password"
                                            value={
                                                this.state.formData
                                                    .passwordRepeat
                                            }
                                            placeholder="Confirm password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="dob"
                                            type="text"
                                            value={this.state.formData.dob}
                                            placeholder="Date of Birth: DD/MM/YYYY"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <DropdownFn
                                            id="gender"
                                            label="Gender"
                                            value={this.state.formData.gender}
                                            changeFn={this.handleInputChange}
                                        />
                                        <DropdownFn
                                            id="securityQuestion1"
                                            label="Security question 1"
                                            value={
                                                this.state.formData
                                                    .securityQuestion1
                                            }
                                            changeFn={this.handleInputChange}
                                        />
                                        <InputFormFn
                                            id="securityAnswer1"
                                            type="text"
                                            value={
                                                this.state.formData
                                                    .securityAnswer1
                                            }
                                            placeholder="Answer for question 1"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <DropdownFn
                                            id="securityQuestion2"
                                            label="Security question 2"
                                            value={
                                                this.state.formData
                                                    .securityQuestion2
                                            }
                                            changeFn={this.handleInputChange}
                                        />
                                        <InputFormFn
                                            id="securityAnswer2"
                                            type="text"
                                            value={
                                                this.state.formData
                                                    .securityAnswer2
                                            }
                                            placeholder="Answer for question 2"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                    </React.Fragment>
                                )}

                                <div className="form-group captcha">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={
                                            process.env.REACT_APP_GOOGLE_CAPTCHA
                                        }
                                        onChange={this.captchaChange}
                                    />
                                </div>
                                <div className="m-t-lg">
                                    <input
                                        className="btn btn--form"
                                        type="submit"
                                        disabled={!this.state.captchaToken}
                                        value={
                                            isLogin
                                                ? "Login"
                                                : "Register"
                                        }
                                    />
                                </div>
                                {isLogin && (
                                    <div className="google-login">
                                        <GoogleLogin
                                            clientId={
                                                process.env
                                                    .REACT_APP_GOOGLE_CLIENT
                                            }
                                            buttonText="Login with Google"
                                            style={{ transform: "scale(0.7)" }}
                                            onSuccess={
                                                this.successResponseGoogle
                                            }
                                            onFailure={
                                                this.failureResponseGoogle
                                            }
                                        ></GoogleLogin>
                                    </div>
                                )}
                            </form>
                        </div>
                        <button
                            className="signup__link"
                            onClick={this.loginForm}
                        >
                            {isLogin ? "Register" : "Login"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

const InputFormFn = (props) => {
    return (
        <InputForm
            type={props.type}
            name={props.id}
            value={props.value || ""}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.changeFn}
            required={props.isRequired}
        ></InputForm>
    );
};

const DropdownFn = ({ label, id, value, changeFn }) => {
    return (
        <Dropdown id={id} value={value} changeFn={changeFn}>
            {id === "gender" ? (
                <OptionsGender label={label} />
            ) : (
                <OptionsQuestions label={label} />
            )}
        </Dropdown>
    );
};

const OptionsQuestions = ({ label }) => {
    return (
        <React.Fragment>
            <option value="" default>
                Select {label}
            </option>
            <option value="1">What is your mother's maiden name?</option>
            <option value="2">What is the name of your first pet?</option>
            <option value="3">What was your first car?</option>
            <option value="4">What elementary school did you attend?</option>
            <option value="5">
                What is the name of the road you grew up on?
            </option>
            <option value="6">Where did you meet your spouse?</option>
            <option value="7">What's your best friend's name?</option>
            <option value="8">Where did you go to high school/college?</option>
            <option value="9">Who was your childhood hero?</option>
            <option value="10">What is your favorite food?</option>
        </React.Fragment>
    );
};

const OptionsGender = ({ label }) => {
    return (
        <React.Fragment>
            <option value="" default>
                Select {label}
            </option>
            <option value="F">Female</option>
            <option value="M">Male</option>
            <option value="O">Other</option>
        </React.Fragment>
    );
};
