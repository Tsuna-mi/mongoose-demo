'use strict';
const mongoose = require('mongoose');
const schemasFiles = require('fs').readdirSync(__dirname + '/schemas');

var models = {};
for (let file of schemasFiles) {
    let fileName = file.substring(0, file.length - 3);
    let data = require('./schemas/' + fileName);
    models[fileName] = mongoose.model(fileName, new mongoose.Schema(data));
}

process.getModel = function (name) {
    return models[name];
}
