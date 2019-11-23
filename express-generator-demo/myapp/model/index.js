const mongoose = require('mongoose');
const schema = require('../schema/index');

var kittySchema = schema.kittySchema;
var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = {
    Kitten: Kitten
}