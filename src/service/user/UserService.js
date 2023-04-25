import ApiService from '../api/ApiService';
import LocalStorageService from '../local-storage/LocalStorageService';

export const isUserLogged = () => {
    return LocalStorageService.getItem('logged_user') !== null;
};

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

    registerUser(userData) {
        return this.post('/register', userData);
    }
}

export default UserService;
