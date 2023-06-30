import {API_URL_BASE, axios} from '../config'

class Bill {
    constructor() {
        this.endpoint = `${API_URL_BASE}/bills`;
    }

    async getBills(cb) {
        const response = await axios.get(this.endpoint);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getBillDetails(bill_id, cb) {
        const response = await axios.get(            `${this.endpoint}/${bill_id}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }
}
export default Bill;
