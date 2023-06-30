import { axios, API_URL_BASE } from './config'

const API_URL_WALLET_ENDPOINT = `${API_URL_BASE}/transfers`

export default {
  async validateTransfer(wallet_id, requestData, cb) {
    const response = await axios.post(
      `${API_URL_WALLET_ENDPOINT}/validate/${wallet_id}`,
      requestData,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },
  async transfer(wallet_id, requestData, cb) {
    const response = await axios.post(
      `${API_URL_WALLET_ENDPOINT}/${wallet_id}`,
      requestData,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },
}
