import {API_URL_BCC_ENDPOINT, axios} from '../config'

const API_URL_ONBOARDING_ENDPOINT = `${API_URL_BCC_ENDPOINT}/onboarding`;

export default {
    async createParentBusinessForm(business_id, cb) {
        const response = await axios.get(`${API_URL_ONBOARDING_ENDPOINT}/parent-business/form/${business_id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async createBusinessDetailsForm(business_id, cb) {
        const response = await axios.get(`${API_URL_ONBOARDING_ENDPOINT}/details/form/${business_id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async storeBusinessDetailsForm(requestData, cb) {
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        const response = await axios.post(
            `${API_URL_ONBOARDING_ENDPOINT}/details/form`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async createBusinessSpecialtyForm(business_id, cb) {
        const response = await axios.get(`${API_URL_ONBOARDING_ENDPOINT}/specialty/form/${business_id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async storeBusinessSpecialtyForm(requestData, cb) {
        const response = await axios.post(
            `${API_URL_ONBOARDING_ENDPOINT}/specialty/form`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async updateBusinessSpecialtyForm(requestData, cb) {
        const response = await axios.put(
            `${API_URL_ONBOARDING_ENDPOINT}/specialty/form`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async createBankDetailsForm(business_id, cb) {
        const response = await axios.get(`${API_URL_ONBOARDING_ENDPOINT}/bank/form/${business_id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async storeBankDetailsForm(requestData, cb) {
        const response = await axios.post(
            `${API_URL_ONBOARDING_ENDPOINT}/bank/form`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async updateBankDetailsForm(requestData, cb) {
        const response = await axios.put(
            `${API_URL_ONBOARDING_ENDPOINT}/bank/form`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },

}
