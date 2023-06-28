import { axios, API_URL_BASE } from '../config'

const API_URL_WALLET_ENDPOINT = `${API_URL_BASE}/member/wallets`

export default {
  async getWalletDetails(wallet_id, cb) {
    const response = await axios.get(`${API_URL_WALLET_ENDPOINT}/${wallet_id}`)
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

  async deleteWallet(wallet_id, cb) {
    const response = await axios.delete(
      `${API_URL_WALLET_ENDPOINT}/${wallet_id}`,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

  async updateWallet(wallet_id, requestData, cb) {
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
    const response = await axios.put(
      `${API_URL_WALLET_ENDPOINT}/${wallet_id}`,
      requestData,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

  async createWallet(requestData, cb) {
    const response = await axios.post(
      `${API_URL_WALLET_ENDPOINT}/store`,
      requestData,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },

  async getWallets(cb) {
    const response = await axios.get(`${API_URL_WALLET_ENDPOINT}`)
    if (response.status === 200) {
      cb(response.data.data)
    }
  },
}
