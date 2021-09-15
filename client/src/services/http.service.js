import axios from "axios";
import RelativeAPI, {
    Mock_Environment,
    Json_Server_URL,
    Base_URL,
    Watson_URL
} from "../constants/api.relative.js";

class HttpService {
    get(apiName, additionalHeaders) {
        const url = this.getUrl(apiName);

        return this.getApiData(url, additionalHeaders, apiName);
    }

    post(apiName, formData, additionalHeaders) {
        const url = this.getUrl(apiName);

        if (Mock_Environment) {
            return this.getApiData(url, null);
        } else {
            return this.postApiData(url, formData, additionalHeaders, apiName);
        }
    }

    put(apiName, formData, additionalHeaders) {
        const url = this.getUrl(apiName);

        if (Mock_Environment) {
            return this.getApiData(url, null);
        } else {
            return this.putApiData(url, formData, additionalHeaders);
        }
    }

    delete(apiName, formData) {
        const url = this.getUrl(apiName);

        if (Mock_Environment) {
            return this.getApiData(url, null, apiName);
        } else {
            return this.deleteApiData(url, formData);
        }
    }

    async getApiData(url, headerValues, apiName) {
        const headers = this.getHttpHeaders(headerValues);

        let options;
        if (apiName.includes("enriched_text.entities.text:")) {
            options = {
                headers,
                auth: {
                    username: 'apikey',
                    password: process.env.REACT_APP_WATSON_PASSWORD
                }
            };
        } else {
            options = {
                headers
            }
        }

        return await axios.get(url, options);
    }

    async postApiData(url, params, headerValues, apiName) {
        const postData = this.formatParamData(params);
        const headers = this.getHttpHeaders(headerValues);

        let options;
        if (apiName === "imageRelated") {
            options = {
                headers,
                responseType: "blob",
            };
        } else {
            options = { headers };
        }

        return await axios.post(url, postData, options);
    }

    async putApiData(url, params, headerValues) {
        const postData = this.formatParamData(params);

        const headers = this.getHttpHeaders(headerValues);

        return await axios.put(url, postData, { headers });
    }

    async deleteApiData(url, params) {
        const deleteData = this.formatParamData(params);

        return await axios.delete(url, deleteData);
    }

    getHttpHeaders(headerValues = {}) {
        // let headers = [];

        const defaultHeader = {
            "Content-type": "application/json",
        };

        headerValues = { ...defaultHeader, ...headerValues };

        // if (headerValues && headerValues.length > 0) {
        //     for (let i = 0; i < headerValues.length; i++) {
        //         if (headerValues[i].Value !== undefined) {
        //             headers = headers.push({
        //                 [headerValues[i].Name]: headerValues[i].Value,
        //             });
        //         }
        //     }
        // }

        return headerValues;
    }

    formatParamData(params) {
        // let postData = {},
        //     deepObject = [];

        // const param = params[0];

        // if (param && params.length > 0) {
        //     if ("Name" in param) {
        //         for (let i = 0; i < params.length; i++) {
        //             postData[params[i].Name] = params[i].Value;
        //         }
        //     } else {
        //         for (let i = 0; i < params.length; i++) {
        //             for (let j in params[i]) {
        //                 postData[params[i][j]["Name"]] = params[i][j]["Value"];
        //             }

        //             deepObject.push({ ...postData });

        //             postData = {};
        //         }

        //         return deepObject;
        //     }
        // }

        // return postData;
        return params;
    }

    getUrl(apiName) {
        const api = RelativeAPI.find((item) => {
            return apiName.includes(item.ApiName);
        });
        const url = this.getApiUrl(api, apiName);

        return url;
    }

    extendHeader(a, b) {
        for (const key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }

        return a;
    }

    getApiUrl(api, apiName) {
        let url;
        if (Mock_Environment) {
            url = Json_Server_URL.concat(api.MockUrl);
        } else {
            if(api.ApiName.includes('enriched_text.entities.text:')) {
                url = Watson_URL.concat(apiName);
            } else {
                url = Base_URL.concat(api.RelativeUrl);
            }
        }

        return url;
    }

    setCookie(cname, cvalue) {
        let d = new Date();
        const domain = window.location.hostname;
        const name = cname + "=";
        d.setTime(d.getTime() + 5 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + cvalue;
        document.cookie = expires;
        document.cookie = "domain=" + domain;
    }

    checkCookie(name) {
        let username = this.getCookie(name);

        if (username !== undefined) {
            return true;
        }

        return false;
    }

    getCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");

        for (let citem of ca) {
            let c = citem;

            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
                this.cookie = c.substring(name.length, c.length);
            }
        }

        return document.cookie ? this.cookie : null;
    }

    eraseCookie() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }

}

export default new HttpService();
