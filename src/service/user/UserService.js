import ApiService from '../api/ApiService';

class UserService extends ApiService {

    constructor() {
        super('/api/users');
    }

    validateLogin(loginInput) {
        return this.post('/login', loginInput);
    }

    getBalance(id) {
        return this.get(`/${id}/balance`);
    }
}

export default UserService;
