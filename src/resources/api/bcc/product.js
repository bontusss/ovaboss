import {API_URL_BCC_ENDPOINT, axios} from '../config'

const API_URL_PRODUCT_ENDPOINT = `${API_URL_BCC_ENDPOINT}/products`;

export default {
    async getProductDetails(product_id, cb) {
        const response = await axios.get(
            `${API_URL_PRODUCT_ENDPOINT}/${product_id}`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async getProductForUpdate(product_id, cb) {
        const response = await axios.get(
            `${API_URL_PRODUCT_ENDPOINT}/${product_id}/edit`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async deleteProduct(product_id, cb) {
        const response = await axios.delete(
            `${API_URL_PRODUCT_ENDPOINT}/${product_id}`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async updateProduct(product_id, requestData, cb) {
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        requestData.append('_method', 'PUT');
        const response = await axios.post(
            `${API_URL_PRODUCT_ENDPOINT}/${product_id}`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async createProduct(requestData, cb) {
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        const response = await axios.post(
            `${API_URL_PRODUCT_ENDPOINT}/store`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async getProducts(business_id, cb) {
        const response = await axios.get(`${API_URL_PRODUCT_ENDPOINT}/list/${business_id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedProducts(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
}
