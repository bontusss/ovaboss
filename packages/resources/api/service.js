import { axios, API_URL_BASE } from "./config";

const API_URL_SERVICE_ENDPOINT = `${API_URL_BASE}/services`;

export default {
  async getServiceDetails(service_id, cb) {
    const response = await axios.get(
      `${API_URL_SERVICE_ENDPOINT}/fetch/${service_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async deleteService(service_id, cb) {
    const response = await axios.delete(
      `${API_URL_SERVICE_ENDPOINT}/${service_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async updateService(service_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_SERVICE_ENDPOINT}/${service_id}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async createService(requestData, cb) {
    const response = await axios.post(
      `${API_URL_SERVICE_ENDPOINT}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getServices(cb) {
    const response = await axios.get(`${API_URL_SERVICE_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  }
};
