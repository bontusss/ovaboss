import {API_URL_BCC_ENDPOINT, axios} from '../config'

const API_URL_ORDER_ENDPOINT = `${API_URL_BCC_ENDPOINT}/orders`;

export default {
    async getOrdersByBusinessId(business_id, order_type, cb) {
        const response = await axios.get(
            `${API_URL_ORDER_ENDPOINT}/${order_type}/list/${business_id}`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async getBusinessOrders(businessId, cb) {
        const response = await axios.get(
            `${API_URL_ORDER_ENDPOINT}/list/${businessId}`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedBusinessOrders(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async cancelOrder(authID, cb) {
    },
    async getOrderDetails(businessId, order_id, cb) {
        const response = await axios.get(
            `${API_URL_ORDER_ENDPOINT}/${businessId}/${order_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async emailInvoice(businessId, order_id, cb) {
        const response = await axios.post(
            `${API_URL_ORDER_ENDPOINT}/email/invoice/${businessId}/${order_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async confirmOrder(businessId, order_id, cb) {
        const response = await axios.post(
            `${API_URL_ORDER_ENDPOINT}/confirm/${businessId}/${order_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async getOrderItemDetails(businessId, order_item_id, cb) {
        const response = await axios.get(
            `${API_URL_ORDER_ENDPOINT}/item/${businessId}/${order_item_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async acceptOrder(businessId, order_item_id, cb) {
        const response = await axios.post(
            `${API_URL_ORDER_ENDPOINT}/accept/${businessId}/${order_item_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async dispatchOrder(businessId, order_item_id, cb) {
        const response = await axios.post(
            `${API_URL_ORDER_ENDPOINT}/dispatch/${businessId}/${order_item_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async rejectOrder(businessId, order_id, cb) {
        const response = await axios.post(
            `${API_URL_ORDER_ENDPOINT}/reject/${businessId}/${order_id}`
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
}
