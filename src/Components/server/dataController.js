const path = require("path");
const fs = require("fs");
const pathToData = path.join(__dirname + "../../../");

const getJsonData = function(pathToData, filename) {
    var filename = path.join(pathToData, filename);
    return JSON.parse(fs.readFileSync(filename, "utf-8"));
};

exports.getData = function(request, response) {
    var data = getJsonData(pathToData, 'data.json');
    setTimeout(function() {
        return response.send(data);
    }, 100);
};