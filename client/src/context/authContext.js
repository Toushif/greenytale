import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "reducers/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, dispatch] = useReducer(authReducer, false, () => {
        const data = JSON.parse(sessionStorage.getItem("isAuthenticated"));
        return !!data;
    });
    const [jwtToken, jwtDispatch] = useReducer(authReducer, "", () => {
        return sessionStorage.getItem("jwtToken") || "";
    });
    const [userDetails, userDispatch] = useReducer(authReducer, null, () => {
        return JSON.parse(sessionStorage.getItem("userDetails"));
    });
    const [isWatsonDiscovery, dispatchWatsonDiscovery] = useReducer(authReducer, false);
    const [searchText, dispatchSearch] = useReducer(authReducer, '');
    const [isSeller, dispatchSeller] = useReducer(authReducer, false, () => {
        const data = JSON.parse(sessionStorage.getItem("isSeller"));
        return !!data;
    });
    const [isAdmin, dispatchAdmin] = useReducer(authReducer, false);
    const [productId, dispatchProductId] = useReducer(authReducer, null);

    useEffect(() => {
        sessionStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        sessionStorage.setItem("jwtToken", jwtToken);
    }, [jwtToken]);

    useEffect(() => {
        sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    }, [userDetails]);

    useEffect(() => {
        sessionStorage.setItem("isSeller", JSON.stringify(isSeller));
    }, [isSeller]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                jwtToken,
                userDetails,
                isWatsonDiscovery,
                isSeller,
                isAdmin,
                searchText,
                productId,
                dispatch,
                jwtDispatch,
                userDispatch,
                dispatchSeller,
                dispatchAdmin,
                dispatchWatsonDiscovery,
                dispatchSearch,
                dispatchProductId
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
