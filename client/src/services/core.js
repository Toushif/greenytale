import appSettings from "../constants/api.constants.js";
import httpService from "../services/http.service";

const Core = {
    loginService(data, headers) {
        return httpService.post(appSettings.login, data, headers);
    },

    signupService(data) {
        return httpService.post(appSettings.signup, data);
    },

    searchWatson(api) {
        return httpService.get(appSettings.watsonSeach + api);
    },

    updateUser(data) {
        return httpService.post(appSettings.updateUser, data);
    },

    deleteUser(data) {
        return httpService.post(appSettings.deleteUser, data);
    },

    sellerProducts(data) {
        return httpService.post(appSettings.sellerProducts, data);
    },

    newProduct(data) {
        return httpService.post(appSettings.newProduct, data);
    },
    
    allProduct() {
        return httpService.get(appSettings.allProduct);
    },

    searchProducts(data) {
        return httpService.post(appSettings.searchProducts, data);
    },
};

export default Core;
