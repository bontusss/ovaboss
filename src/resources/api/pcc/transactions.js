import {API_URL_MEMBER_ENDPOINT, axios} from '../config'

const API_URL_TRANSACTIONS_ENDPOINT = `${API_URL_MEMBER_ENDPOINT}/transactions`;

export default {
    async getTransactions(wallet_id, cb) {
        const response = await axios.get(
            `${API_URL_TRANSACTIONS_ENDPOINT}/${wallet_id}`
        );
        if (response.status === 200) {
            cb(response.data.data, response.data)
        }
    },
    async getPaginatedTransactions(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data.data, response.data)
        }
    },
}
