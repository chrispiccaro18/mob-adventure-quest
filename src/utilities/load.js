function loadLocalStorage(key) {
    const json = window.localStorage.getItem(key);
    if(!json) {
        return null;
    }
    const parsedData = JSON.parse(json);
    return parsedData;
}

export default loadLocalStorage;