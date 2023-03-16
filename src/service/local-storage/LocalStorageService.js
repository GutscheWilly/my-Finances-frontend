class LocalStorageService {

    static addItem(key, value) {
        const valueJson = JSON.stringify(value);
        localStorage.setItem(key, valueJson);
    }

    static getItem(key) {
        const valueJson = localStorage.getItem(key);
        return JSON.parse(valueJson);
    }
}

export default LocalStorageService;
