import {API_URL_BASE, axios} from '../config'

class Checkout {
    constructor() {
        this.endpoint = `${API_URL_BASE}/checkout`;
    }

    async init(requestData, cb) {
        const response = await axios.post(`${this.endpoint}/order/contact-person-init`,
            requestData
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async loadWallets(requestData, cb) {
        const response = await axios.post(`${this.endpoint}/wallets`,
            requestData
        );
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async placeOrder(requestData, cb) {
        const response = await axios.post(`${this.endpoint}/order`,
            requestData
        );
        if (response.status === 200) {
            cb(response.data)
        }
    }

    async paid(requestData, cb) {
        const response = await axios.post(`${this.endpoint}/paid`,
            requestData
        );
        if (response.status === 200) {
            cb(response.data)
        }
    }

}

export default Checkout;
