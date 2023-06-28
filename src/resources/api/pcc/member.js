import {API_URL_MEMBER_ENDPOINT, axios} from '../config'

export default {
    async changePassword(requestData, cb) {
        const response = await axios.put(`${API_URL_MEMBER_ENDPOINT}/profile/change-password`, requestData);
        if (response.status === 200) {
            cb(response.data)
        }
    },



}
