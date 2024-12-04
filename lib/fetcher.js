export default (url, method = "get", body = {}, headers = {}) => fetch(url, { 
    method, 
    body: method === "post" ? body : null,
    headers
}).then(res => res.json());