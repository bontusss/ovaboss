import {API_URL_BASE, axios} from '../config'

class Service {
    constructor() {
        this.endpoint = `${API_URL_BASE}/services`;
    }

    async getServices(cb) {
        const response = await axios.get(this.endpoint);
        if (response.status === 200) {
            cb(response.data)
        }
    }

    async getServiceDetails(slug, cb) {
        const response = await axios.get(`${API_URL_BASE}/service/${slug}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }
}
export default Service;
