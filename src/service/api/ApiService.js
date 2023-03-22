import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
});

class ApiService {

    constructor(directory) {
        this.directory = directory;
    }

    addPath(url) {
        return this.directory + url;
    }

    post(url, object) {
        return httpClient.post(this.addPath(url), object);
    }

    put(url, object) {
        return httpClient.put(this.addPath(url), object);
    }

    get(url, object) {
        return httpClient.get(this.addPath(url), object);
    }

    delete(url) {
        return httpClient.delete(this.addPath(url));
    }
}

export default ApiService;
