import {API_URL_BASE, axios} from '../config'

const API_URL_MTR_ENDPOINT = `${API_URL_BASE}/mtr`;

export default {
    async getPendingMtr(cb) {
        const response = await axios.get(
            `${API_URL_MTR_ENDPOINT}/list`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedPendingMtr(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async filterBusinessByMtr(requestData, cb) {
        const response = await axios.post(
            `${API_URL_MTR_ENDPOINT}/filter`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data, response.data.msg);
        }
    },

    async addNewMtrPurchase(requestData, cb) {
        const response = await axios.post(
            `${API_URL_MTR_ENDPOINT}/purchase`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },
}
