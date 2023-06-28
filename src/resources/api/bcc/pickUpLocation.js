import {API_URL_BCC_ENDPOINT, axios} from '../config'

const API_URL_PICK_UP_LOCATION_ENDPOINT = `${API_URL_BCC_ENDPOINT}/pickup-locations`;

export default {
    async getPickUpLocationDetails(pickUpLocation_id, cb) {
        const response = await axios.get(
            `${API_URL_PICK_UP_LOCATION_ENDPOINT}/${pickUpLocation_id}`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },
    async getPickUpLocationForUpdate(pickUpLocation_id, cb) {
        const response = await axios.get(
            `${API_URL_PICK_UP_LOCATION_ENDPOINT}/${pickUpLocation_id}/edit`,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async deletePickUpLocation(pickUpLocation_id, cb) {
        const response = await axios.delete(
            `${API_URL_PICK_UP_LOCATION_ENDPOINT}/${pickUpLocation_id}`,
        )
        if (response.status === 200) {
            cb(response.data)
        }
    },

    async updatePickUpLocation(pickUpLocation_id, requestData, cb) {
        const response = await axios.put(
            `${API_URL_PICK_UP_LOCATION_ENDPOINT}/${pickUpLocation_id}`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async createPickUpLocation(requestData, cb) {
        const response = await axios.post(
            `${API_URL_PICK_UP_LOCATION_ENDPOINT}/store`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data)
        }
    },

    async getPickUpLocations(business_id, cb) {
        const response = await axios.get(`${API_URL_PICK_UP_LOCATION_ENDPOINT}/list/${business_id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    },
    async getPaginatedPickUpLocations(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    },
}
