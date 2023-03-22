import ApiService from '../api/ApiService';

class LaunchService extends ApiService {

    constructor() {
        super('/api/launches');
    }

    searchLaunches(filter) {
        return this.get('', filter);
    }
}

export default LaunchService;
