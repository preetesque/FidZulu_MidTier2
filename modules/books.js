var request = require('sync-request'), res1;

exports.get_books_location = (location) => {
    res1 = request('GET', "http://localhost:3034/books/all/" + location);
    if (res1.statusCode == 404) {
        return ""
    }
    else if (res1.statusCode == 500) {
        return "500"
    }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
};

exports.get_team = () => {
    var res1 = request('GET', "http://localhost:3034/books/team");
    if (res1.statusCode == 404) {
        return ""
    }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
}