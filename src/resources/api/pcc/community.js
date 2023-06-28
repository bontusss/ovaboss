import {API_URL_MEMBER_ENDPOINT, axios} from '../config'

const API_URL_COMMUNITY_ENDPOINT = `${API_URL_MEMBER_ENDPOINT}/community`;

export default {
    async getCommunityMembersByType(member_type, cb) {
        const response = await axios.get(
            `${API_URL_COMMUNITY_ENDPOINT}/${member_type}`
        );
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedCommunityMembers(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
}
