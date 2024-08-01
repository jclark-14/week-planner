var data = {
    events: [],
    dayOfTheWeek: '',
};
function writeJSON(data) {
    var dataJSON = JSON.stringify(data);
    localStorage.setItem('data-storage', dataJSON);
    return JSON.stringify(data);
}
function readJSON() {
    var returnJSON = localStorage.getItem('data-storage');
    if (returnJSON) {
        data = JSON.parse(returnJSON);
    }
    else {
        return data;
    }
}
readJSON();
console.log('data', data);
