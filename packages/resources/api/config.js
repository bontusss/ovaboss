const ACCESS_TOKEN_KEY = "accesstoken";
const SESSION_KEY = "session_key";
const API_URL_BASE = `https://ovaboss.dev.i.ng/api/v1`; // TODO: Config fix - Get server from .env and set during bundling

import axios from "axios";

const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.defaults.headers.common["Authorization"] = null;
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export { ACCESS_TOKEN_KEY, SESSION_KEY, API_URL_BASE, axios };
