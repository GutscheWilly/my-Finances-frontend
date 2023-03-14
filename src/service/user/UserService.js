import ApiService from '../api/ApiService';

class UserService extends ApiService {

    constructor() {
        super('/api/users');
    }

    validateLogin(loginInput) {
        return this.post('/login', loginInput);
    }
}

export default UserService;
