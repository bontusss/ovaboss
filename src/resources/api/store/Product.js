import {API_URL_BASE, axios} from '../config'

class Product {
    constructor() {
        this.endpoint = `${API_URL_BASE}/products`;
    }

    async getTopSellingProducts(cb) {
        const response = await axios.get(`${this.endpoint}/top`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getProducts(cb) {
        const response = await axios.get(this.endpoint);
        if (response.status === 200) {
            cb(response.data)
        }
    }

    async getLatestProducts(cb) {
        const response = await axios.get(`${this.endpoint}/latest`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getProductDetails(slug, cb) {
        const response = await axios.get(`${API_URL_BASE}/product/${slug}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }
}

export default Product;
