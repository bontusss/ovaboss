import { API_URL_BASE, axios } from "./config";

const API_URL_CATEGORY_ENDPOINT = `${API_URL_BASE}/data/categories`;

export default {
  async getCategoryByPackage(package_ids, cb) {
    const response = await axios.get(
      `${API_URL_CATEGORY_ENDPOINT}/package/filter/${package_ids}`
    );
    if (response.status === 200) {
      cb(response.data);
    }
  },

  async getCategoryDetails(category_id, cb) {
    const response = await axios.get(
      `${API_URL_CATEGORY_ENDPOINT}/${category_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async deleteCategory(category_id, cb) {
    const response = await axios.delete(
      `${API_URL_CATEGORY_ENDPOINT}/${category_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async updateCategory(category_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_CATEGORY_ENDPOINT}/${category_id}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async createCategory(requestData, cb) {
    const response = await axios.post(
      `${API_URL_CATEGORY_ENDPOINT}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getCategories(cb) {
    const response = await axios.get(`${API_URL_CATEGORY_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getSlimCategories(cb) {
    const response = await axios.get(`${API_URL_CATEGORY_ENDPOINT}/slim`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  }
};
