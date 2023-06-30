import {API_URL_BASE, axios} from '../config'

const API_URL_ORDER_ENDPOINT = `${API_URL_BASE}/orders`;

export default {
    async getUserOrders(cb) {
        const response = await axios.get(
            `${API_URL_ORDER_ENDPOINT}/list`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedUserOrders(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getOrderDetails(order_id, cb) {
        const response = await axios.get(
            `${API_URL_ORDER_ENDPOINT}/${order_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async emailInvoice(order_id, cb) {
        const response = await axios.post(
            `${API_URL_ORDER_ENDPOINT}/email/invoice/${order_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async confirmOrder(order_id, cb) {
        const response = await axios.post(
            `${API_URL_ORDER_ENDPOINT}/confirm/${order_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async cancelOrder(authID, cb) {
    },
}
