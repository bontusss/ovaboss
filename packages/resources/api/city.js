import { API_URL_BASE, axios } from "./config";

const API_URL_CITY_ENDPOINT = `${API_URL_BASE}/data/cities`;

export default {
  async getCitiesByState(state_id, cb) {
    const response = await axios.get(
      `${API_URL_CITY_ENDPOINT}/filter/${state_id}`
    );
    if (response.status === 200) {
      cb(response.data);
    }
  },
  async getCityDetails(city_id, cb) {
    const response = await axios.get(`${API_URL_CITY_ENDPOINT}/${city_id}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async deleteCity(city_id, cb) {
    const response = await axios.delete(`${API_URL_CITY_ENDPOINT}/${city_id}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async updateCity(city_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_CITY_ENDPOINT}/${city_id}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async createCity(requestData, cb) {
    const response = await axios.post(`${API_URL_CITY_ENDPOINT}`, requestData);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getCities(cb) {
    const response = await axios.get(`${API_URL_CITY_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  }
};
