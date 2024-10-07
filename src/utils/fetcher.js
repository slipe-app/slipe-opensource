import api_url from "../constants/api_url.js";

export default (url, method = "get", body = {}, headers = {}) => fetch(api_url + url, { 
    method, 
    body: method === "post" ? body : null,
    headers
}).then(res => res.json());

// 4.63