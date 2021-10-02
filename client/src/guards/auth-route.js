import React, { Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import GlobalSkeletonLoader from "components/loader/global-skeleton-loader";

function isUserAllowed(rest) {
    return !!rest.user.find(v => rest.allowed.includes(v));
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAllowed = rest.user !== null && isUserAllowed(rest)
    return isAllowed ? 
        (<Suspense fallback={<GlobalSkeletonLoader count="2" />}>
            <Component {...rest}/>
        </Suspense>)
        :
        <Redirect to="/login" />
}

export default PrivateRoute;