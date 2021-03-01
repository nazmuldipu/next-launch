import axios from "axios";
// import auth from './authService';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

axios.defaults.baseURL = publicRuntimeConfig.serverUrl;

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        console.log("Logging the error", error);
        // alert("An unexpected error occurred.");
        // window.location = "/login";
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
