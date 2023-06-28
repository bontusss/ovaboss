import { axios, API_URL_BCC_ENDPOINT } from '../config'

const API_URL_SERVICE_ENDPOINT = `${API_URL_BCC_ENDPOINT}/services`;

export default {
    async getServiceDetails(service_id, cb) {
        const response = await axios.get(
            `${API_URL_SERVICE_ENDPOINT}/${service_id}`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },


    async getServiceForUpdate(service_id, cb) {
        const response = await axios.get(
            `${API_URL_SERVICE_ENDPOINT}/${service_id}/edit`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async deleteService(service_id, cb) {
        const response = await axios.delete(
            `${API_URL_SERVICE_ENDPOINT}/${service_id}`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async updateService(service_id, requestData, cb) {
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        requestData.append('_method', 'PUT');
        const response = await axios.post(
            `${API_URL_SERVICE_ENDPOINT}/${service_id}`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async createService(requestData, cb) {
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        const response = await axios.post(
            `${API_URL_SERVICE_ENDPOINT}/store`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async getServices(business_id, cb) {
        const response = await axios.get(`${API_URL_SERVICE_ENDPOINT}/list/${business_id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedServices(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
}
