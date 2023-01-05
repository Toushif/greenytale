/*eslint-disable */
import React, { lazy, Component, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "views/home/index";
import NotFound from "views/not-found/index";
import PrivateRoute from "guards/auth-route";
import Header from "views/header/index";
import Footer from "views/footer/index";
import AuthContextProvider from "context/authContext";
import { AuthContext } from "context/authContext";
import "./App.scss";
import "styles/common.scss";

const Login = lazy(() => import("views/login/index"));
const Profile = lazy(() => import("views/profile/index"));
const Product = lazy(() => import("views/product/index"));
const WatsonDiscovery = lazy(() => import("views/watson-discovery/index"));
const AboutUs = lazy(() => import("views/about/index"));
const Settings = lazy(() => import("views/settings/index"));
const Seller = lazy(() => import("views/seller/index"));
const SellerUpload = lazy(() => import("views/product-upload/index"));
const Cart = lazy(() => import("views/cart/index"));

const Main = (props) => {
    const { userDetails } = useContext(AuthContext);
    const context = useContext(AuthContext);
    let roles = [3];
    
    if (userDetails && userDetails.role) {
        const store = userDetails.role
            .filter((v) => v.ActiveStatus)
            .map((v) => v.RoleID);
        roles = [...new Set([...roles, ...store])];
        
    }

    return (
        <div className="App">
            {!location.pathname.includes("login") && (
                <Header 
                    {...props}
                    context={context} 
                />
            )}
            <Switch>
                <Route
                    exact={true}
                    path="/"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[1, 2, 3, 4]}
                            component={Dashboard}
                        />
                    )}
                />
                <Route
                    exact
                    path="/login"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[1, 2, 3, 4]}
                            component={Login}
                        />
                    )}
                />
                <Route
                    exact
                    path="/profile"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[1, 2, 4]}
                            component={Profile}
                        />
                    )}
                />
                <Route
                    exact
                    path="/product"
                    render={() => (
                        <PrivateRoute
                            user={roles}
                            context={context} 
                            allowed={[1, 2, 3, 4]}
                            component={Product}
                        />
                    )}
                />
                <Route
                    exact
                    path="/product/:id"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            user={roles}
                            context={context} 
                            allowed={[1, 2, 3, 4]}
                            component={Product}
                        />
                    )}
                />
                <Route
                    exact
                    path="/discover"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[1, 2, 3, 4]}
                            component={WatsonDiscovery}
                        />
                    )}
                />
                <Route
                    exact
                    path="/about-us"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[1, 2, 3, 4]}
                            component={AboutUs}
                        />
                    )}
                />
                <Route
                    exact
                    path="/settings"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[1, 2, 4]}
                            component={Settings}
                        />
                    )}
                />
                <Route
                    exact
                    path="/seller"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[2]}
                            component={Seller}
                        />
                    )}
                />
                <Route
                    exact
                    path="/seller-upload"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[2]}
                            component={SellerUpload}
                        />
                    )}
                />
                <Route
                    exact
                    path="/cart"
                    render={(prop) => (
                        <PrivateRoute
                            {...prop}
                            context={context} 
                            user={roles}
                            allowed={[1, 2, 4]}
                            component={Cart}
                        />
                    )}
                />
                <Route exact path="/not-found" component={NotFound} />
                <Route
                    path="*"
                    render={() => <Redirect to="/not-found" />}
                ></Route>
            </Switch>
            {!location.pathname.includes("login") && <Footer />}
        </div>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main">
                <AuthContextProvider>
                    <Main {...this.props} />
                </AuthContextProvider>
            </div>
        );
    }
}

export default App;