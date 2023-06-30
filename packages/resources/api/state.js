import { axios, API_URL_BASE } from "./config";

const API_URL_STATE_ENDPOINT = `${API_URL_BASE}/data/states`;

export default {
  async getStatesByCountry(country_id, cb) {
    const response = await axios.get(
      `${API_URL_STATE_ENDPOINT}/filter/${country_id}`
    );
    if (response.status === 200) {
      cb(response.data);
    }
  },
  async getStateDetails(state_id, cb) {
    const response = await axios.get(`${API_URL_STATE_ENDPOINT}/${state_id}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async deleteState(state_id, cb) {
    const response = await axios.delete(
      `${API_URL_STATE_ENDPOINT}/${state_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async updateState(state_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_STATE_ENDPOINT}/${state_id}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async createState(requestData, cb) {
    const response = await axios.post(`${API_URL_STATE_ENDPOINT}`, requestData);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getStates(cb) {
    const response = await axios.get(`${API_URL_STATE_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  }
};
