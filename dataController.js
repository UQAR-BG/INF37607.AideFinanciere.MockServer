const path = require('path');
const fs = require('fs');

const basePathToData = path.join(__dirname, '');

const getJsonData = function (basePathToData, filename) {
  var localFilename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(localFilename, 'utf-8'));
};

exports.getData = function (request, response) {
  var data = getJsonData(basePathToData, 'data.json');
  setTimeout(function() {
    return response.send(data);
  }, 100);
};