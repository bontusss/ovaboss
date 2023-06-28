import {API_URL_BASE, axios} from '../config'

const API_URL_ONBOARDING_ENDPOINT = `${API_URL_BASE}/member/onboarding`;

export default {
    async createPersonalDetailsForm(cb) {
        const response = await axios.get(`${API_URL_ONBOARDING_ENDPOINT}/personal/form`);
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async storePersonalDetailsForm(requestData, cb) {
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        const response = await axios.post(
            `${API_URL_ONBOARDING_ENDPOINT}/personal/form`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async createBankDetailsForm(cb) {
        const response = await axios.get(`${API_URL_ONBOARDING_ENDPOINT}/bank/form`);
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


    async createNextOfKinDetailsForm(cb) {
        const response = await axios.get(`${API_URL_ONBOARDING_ENDPOINT}/nok/form`);
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async storeNextOfKinDetailsForm(requestData, cb) {
        const response = await axios.post(
            `${API_URL_ONBOARDING_ENDPOINT}/nok/form`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async updateNextOfKinDetailsForm(requestData, cb) {
        const response = await axios.put(
            `${API_URL_ONBOARDING_ENDPOINT}/nok/form`,
            requestData,
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },


}
