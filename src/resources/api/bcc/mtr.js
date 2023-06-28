import {API_URL_BCC_ENDPOINT, axios} from '../config'

const API_URL_BCC_MTR_ENDPOINT = `${API_URL_BCC_ENDPOINT}/mtr`;

export default {
    async getPendingMtr(business_id, cb) {
        const response = await axios.get(
            `${API_URL_BCC_MTR_ENDPOINT}/list/${business_id}`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getUnattendedMtr(business_id, cb) {
        const response = await axios.get(
            `${API_URL_BCC_MTR_ENDPOINT}/unattended/${business_id}`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getUnusedMTRs(business_id, cb) {
        const response = await axios.get(
            `${API_URL_BCC_MTR_ENDPOINT}/${business_id}`
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
            `${API_URL_BCC_MTR_ENDPOINT}/filter`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data, response.data.msg);
        }
    },

    async addNewMtrPurchase(business_id, requestData, cb) {
        const response = await axios.post(
            `${API_URL_BCC_MTR_ENDPOINT}/purchase/${business_id}`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async payMtrServiceCharge(business_id, requestData, cb) {
        const response = await axios.post(
            `${API_URL_BCC_MTR_ENDPOINT}/pay-sc/${business_id}`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async rejectMtrScPayment(business_id, requestData, cb) {
        const response = await axios.post(
            `${API_URL_BCC_MTR_ENDPOINT}/reject/${business_id}`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async generateMtrForBusiness(business_id, cb) {
        const response = await axios.get(
            `${API_URL_BCC_MTR_ENDPOINT}/generate/${business_id}`,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },
}
