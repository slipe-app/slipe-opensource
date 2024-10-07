import api_url from "../constants/api_url.js";

export default (url, method = "get", headers = {}) => fetch(api_url + url, { method, ...headers}).then(res => res.json());

// 4.63