import {API_URL_BASE, axios} from '../config'

class Business {
    constructor() {
        this.endpoint = `${API_URL_BASE}/businesses`;
    }

    async getBusinesses(cb) {
        const response = await axios.get(this.endpoint);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getMyBusinesses(cb) {
        const response = await axios.get(`${this.endpoint}/list`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getBusinessDetails(slug, cb) {
        const response = await axios.get(`${API_URL_BASE}/business/${slug}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }
}
export default Business;
