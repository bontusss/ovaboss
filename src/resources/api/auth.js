import { API_URL_BASE, axios } from "./config";
const WEB_URL_BASE = `${API_URL_BASE}`.endsWith("api/v1")
  ? `${API_URL_BASE}`.replace("api/v1", "")
  : API_URL_BASE;
const API_URL_AUTH_ENDPOINT = `${API_URL_BASE}/auth/`;

export default {
  async register(requestData, cb) {
    const response = await axios.post(
      `${WEB_URL_BASE}auth/register`,
      requestData
    );
    if (response.status === 201) {
      cb(response.data);
    }
  },

  async login(requestData, cb) {
    const response = await axios.post(`${WEB_URL_BASE}auth/login`, requestData);
    if (response.status === 200) {
      cb(response.data);
    }
  },

  async logout(cb) {
    const response = await axios.post(`${API_URL_AUTH_ENDPOINT}logout`);
    if (response.status === 200) {
      cb();
    }
  },

  async refresh(cb) {
    const response = await axios.post(`${API_URL_AUTH_ENDPOINT}refresh`);
    if (response.status === 200) {
      cb(response.data);
    }
  },

  async getProfile(cb) {
    const response = await axios.get(`${API_URL_AUTH_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data);
    }
  }
};
