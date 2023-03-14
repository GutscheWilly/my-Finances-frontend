import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {

    post(url, object) {
        return httpClient.post(url, object);
    }

    put(url, object) {
        return httpClient.put(url, object);
    }

    get(url) {
        return httpClient.get(url);
    }

    delete(url) {
        return httpClient.delete(url);
    }
}

export default ApiService;
