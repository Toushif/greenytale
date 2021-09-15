import React, { Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import GlobalLoader from "components/loader/global-loader";

function isUserAllowed(rest) {
    return !!rest.user.find(v => rest.allowed.includes(v));
}


const PrivateRoute = ({ component: Component, ...rest }) => {
    // console.log('rest2', rest)
    const isAllowed = rest.user !== null && isUserAllowed(rest)
    return isAllowed ? 
        (<Suspense fallback={GlobalLoader}>
            <Component {...rest}/>
        </Suspense>)
        : <Redirect to="/login" />
}


/*
const PrivateRoute = () => {
    
}*/

export default PrivateRoute;