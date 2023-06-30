import { axios, API_URL_BCC_ENDPOINT } from '../config'

export default {
  async getInitDashboard(business_id, cb) {
    const response = await axios.get(
      `${API_URL_BCC_ENDPOINT}/${business_id}/dashboard`,
    )
    if (response.status === 200) {
      cb(response.data.data)
    }
  },
}
