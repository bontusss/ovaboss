import {API_URL_BASE, axios} from '../config'

class ShoppingCart {
    constructor() {
        this.endpoint = `${API_URL_BASE}/cart`;
    }

    async clearShoppingCart(cb) {
        const response = await axios.get(`${this.endpoint}/clear`);
        if (response.status === 200) {
            cb(response.data.message)
        }
    }

    async getShoppingCartDetails(cb) {
        const response = await axios.get(`${this.endpoint}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async applyCouponCode(cb) {
        const response = await axios.post(`${this.endpoint}/apply-coupon`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getShoppingCount(cb) {
        const response = await axios.get(`${this.endpoint}/count`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getShoppingCartSummary(cb) {
        const response = await axios.get(`${this.endpoint}/details`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getShoppingCartItemCount(cb) {
        const response = await axios.get(`${this.endpoint}/count`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async addToCart(requestData, cb) {
        const response = await axios.post(`${this.endpoint}`,
            requestData,
        );
        if (response.status === 201) {
            cb(response.data.data)
        }
    }

    async updateCart(requestData, cb) {
        const response = await axios.put(`${this.endpoint}`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async addConditionCart(requestData, cb) {
        const response = await axios.get(`${this.endpoint}/conditions`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async removeFromCart(product_id, cb) {
        const response = await axios.delete(`${this.endpoint}/${product_id}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }
}
export default ShoppingCart;
