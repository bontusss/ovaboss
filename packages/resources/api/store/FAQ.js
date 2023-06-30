import {API_URL_BASE, axios} from '../config'

class FAQ {
    constructor() {
        this.endpoint = `${API_URL_BASE}/faq`;
    }

    async getFaq(cb) {
        const response = await axios.get(`${this.endpoint}`);
        if (response.status === 200) {
            cb(response.data)
        }
    }

}

export default FAQ;
