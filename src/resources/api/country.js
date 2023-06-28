import { axios, API_URL_BASE } from "./config";

const API_URL_COUNTRY_ENDPOINT = `${API_URL_BASE}/data/countries`;

export default {
  async getCountryDetails(country_id, cb) {
    const response = await axios.get(
      `${API_URL_COUNTRY_ENDPOINT}/${country_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async deleteCountry(country_id, cb) {
    const response = await axios.delete(
      `${API_URL_COUNTRY_ENDPOINT}/${country_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async updateCountry(country_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_COUNTRY_ENDPOINT}/${country_id}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async createCountry(requestData, cb) {
    const response = await axios.post(
      `${API_URL_COUNTRY_ENDPOINT}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getCountries(cb) {
    const response = await axios.get(`${API_URL_COUNTRY_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  }
};
