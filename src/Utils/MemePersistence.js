export class MemePersistence {
    constructor (storageService) {
        this._storageService = storageService;
    };

    getMemes() {
        return this._storageService.getArray();
    }

    saveMeme(meme) {
        let memes = this.getMemes();
        memes.push(meme);
        this._storageService.setArray(memes);
    }
}