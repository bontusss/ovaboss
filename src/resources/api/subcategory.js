import { API_URL_BASE, axios } from "./config";

const API_URL_SUB_CATEGORY_ENDPOINT = `${API_URL_BASE}/data/sub-categories`;

export default {
  async getSubCategoryByCategory(category_id, cb) {
    const response = await axios.get(
      `${API_URL_SUB_CATEGORY_ENDPOINT}/filter/${category_id}`
    );
    if (response.status === 200) {
      cb(response.data);
    }
  },

  async getSubCategoryDetails(subCategory_id, cb) {
    const response = await axios.get(
      `${API_URL_SUB_CATEGORY_ENDPOINT}/${subCategory_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async deleteSubCategory(subCategory_id, cb) {
    const response = await axios.delete(
      `${API_URL_SUB_CATEGORY_ENDPOINT}/${subCategory_id}`
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async updateSubCategory(subCategory_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_SUB_CATEGORY_ENDPOINT}/${subCategory_id}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async createSubCategory(requestData, cb) {
    const response = await axios.post(
      `${API_URL_SUB_CATEGORY_ENDPOINT}`,
      requestData
    );
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getSubCategories(cb) {
    const response = await axios.get(`${API_URL_SUB_CATEGORY_ENDPOINT}`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  },

  async getSlimSubCategories(cb) {
    const response = await axios.get(`${API_URL_SUB_CATEGORY_ENDPOINT}/slim`);
    if (response.status === 200) {
      cb(response.data.data);
    }
  }
};
