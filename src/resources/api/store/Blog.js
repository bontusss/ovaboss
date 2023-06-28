import {API_URL_BASE, axios} from '../config'

class Blog {
    constructor() {
        this.endpoint = `${API_URL_BASE}/blog`;
    }

    async getBlogPosts(categoryId, cb) {
        const response = await axios.get(`${this.endpoint}/list/${categoryId}`);
        if (response.status === 200) {
            cb(response.data)
        }
    }

    async getPaginatedBlogPost(toUrl, cb) {
        const response = await axios.get(toUrl);
        if (response.status === 200) {
            cb(response.data)
        }
    }

    async getCategories(cb) {
        const response = await axios.get(`${this.endpoint}/categories`);
        if (response.status === 200) {
            cb(response.data)
        }
    }

    async getComments(cb) {
        const response = await axios.get(`${this.endpoint}/comments/${thisPost.id}`);
        if (response.status === 200) {
            cb(response.data)
        }
    }

    async comment(requestData, cb) {
        const response = await axios.post(
            `${this.endpoint}/comment`,
            requestData,
        )
        if (response.status === 200) {
            cb(response.data.data, response.data.success)
        }
    }

}

export default Blog;
