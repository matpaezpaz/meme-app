export class localStorageService {
    constructor(key) {
        this._key = key;
    }
    getArray() {
        let item = localStorage.getItem(this._key);
        try {
            let objectItem = JSON.parse(item);
            if (Array.isArray(objectItem)) {
                return objectItem;
            } else {
                return [];
            }
        } catch (exception) {
            return [];
        }
    }
    setArray(value) {
        localStorage.setItem(this._key, JSON.stringify(value));
    }
}