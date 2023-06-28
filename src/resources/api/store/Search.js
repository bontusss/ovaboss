import {API_URL_BASE, axios} from '../config'

class Search {
    constructor() {
        this.endpoint = `${API_URL_BASE}/search`;
    }

    async searchByTerm(term, cb) {
        const response = await axios.get(`${this.endpoint}/${term}`);
        if (response.status === 200) {
            cb(response.data.data)
        }
    }
}

export default Search;
