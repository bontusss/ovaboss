import {API_URL_BASE, axios} from '../config'

class Order {
    constructor() {
        this.endpoint = `${API_URL_BASE}/orders`;
    }

    async invoice(orderNumber, cb) {
        const response = await axios.get(`${this.endpoint}/invoice/${orderNumber}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

}

export default Order;
