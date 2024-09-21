import api_url from "../constants/api_url.js";

export default (url) => fetch(api_url + url).then((res) => res.json());