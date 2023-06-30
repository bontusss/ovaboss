import {API_URL_BCC_ENDPOINT, axios} from '../config'

const API_URL_COMMUNITY_ENDPOINT = `${API_URL_BCC_ENDPOINT}/community`;

export default {
    async getCommunityMembersBusinesses(member_type, cb) {
        const response = await axios.get(
            `${API_URL_COMMUNITY_ENDPOINT}/${member_type}`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedCommunityMembersBusinesses(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
}
