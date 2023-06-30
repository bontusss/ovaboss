import { axios, API_URL_BCC_ENDPOINT } from '../config'

const API_URL_BUSINESS_ENDPOINT = `${API_URL_BCC_ENDPOINT}/businesses`;

export default {
  async getBusinessDetails(business_id, cb) {
    const response = await axios.get(
      `${API_URL_BUSINESS_ENDPOINT}/fetch/${business_id}`,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },
  async getSlimBusinessDetails(wallet_id, cb) {
    const response = await axios.get(
      `${API_URL_BUSINESS_ENDPOINT}/slim/fetch/${wallet_id}`,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

  async deleteBusiness(business_id, cb) {
    const response = await axios.delete(
      `${API_URL_BUSINESS_ENDPOINT}/${business_id}`,
    )
    if (response.status === 200) {
      cb(response.data)
    }
  },

  async updateBusiness(business_id, requestData, cb) {
    const response = await axios.put(
      `${API_URL_BUSINESS_ENDPOINT}/${business_id}`,
      requestData,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

  async createBusiness(requestData, cb) {
    const response = await axios.post(
      `${API_URL_BUSINESS_ENDPOINT}`,
      requestData,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

  async getBusinesses(cb) {
    const response = await axios.get(`${API_URL_BUSINESS_ENDPOINT}`)
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

    async filterMemberByPin(requestData, cb) {
        const response = await axios.post(
            `${API_URL_BUSINESS_ENDPOINT}/managers/filter`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async addBusinessManager(requestData, cb) {
        const response = await axios.post(
            `${API_URL_BUSINESS_ENDPOINT}/managers/add`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async deleteBusinessManager(business_id, user_id, cb) {
        const response = await axios.delete(
            `${API_URL_BUSINESS_ENDPOINT}/managers/${business_id}/${user_id}`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
}
