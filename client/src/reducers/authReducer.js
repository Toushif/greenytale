const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN-LOGOUT":
            return !state;
        case "JWT-TOKEN":
            return action.token;
        case "USER-DETAILS":
            return action.res;
        case "WATSON-DISCOVERY":
            return action.res
        case "IS-SELLER":
            return action.res
        case "IS-ADMIN":
            return action.res
        case "SEARCH-HOME":
            return action.res
        case "PRODUCT-ID":
            return action.res
        default:
            return state;
    }
};

export default authReducer;
