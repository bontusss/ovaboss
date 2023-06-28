import {API_URL_BASE, axios} from '../config'
import {isset} from "../../inc/utils";

class Category {
    constructor() {
        this.endpoint = `${API_URL_BASE}/categories`;
    }

    async getMenu(cb) {
        if (isset(() => menu)) {//If initialized from server
            cb(menu)
        } else {
            const response = await axios.get(`${this.endpoint}/menu`);
            if (response.status === 200) {
                cb(response.data.data)
            }
        }
    }

    async getCategories(cb) {
        const response = await axios.get(this.endpoint);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getPopularProductCategories(cb) {
        const response = await axios.get(`${this.endpoint}/popular`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }

    async getCategoryDetails(category_id, cb) {
        const response = await axios.get(            `${this.endpoint}/${category_id}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }
}
export default Category;
