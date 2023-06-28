import { axios, API_URL_BASE } from "./config";

const API_URL_BILL_ENDPOINT = `${API_URL_BASE}/bills`;

export default {
  async getBillDetails(bill_id, cb) {
    const response = await axios.get(
      `${API_URL_BILL_ENDPOINT}/fetch/${bill_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async deleteBill(bill_id, cb) {
    const response = await axios.delete(`${API_URL_BILL_ENDPOINT}/${bill_id}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async updateBill(bill_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_BILL_ENDPOINT}/${bill_id}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async createBill(requestData, cb) {
    const response = await axios.post(`${API_URL_BILL_ENDPOINT}`, requestData);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getBills(cb) {
    const response = await axios.get(`${API_URL_BILL_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  }
};
