var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alloySchema = new Schema({
    name: String,
    mass: Number,
    volume: Number,
    description: String,
    ingredients: [String],
    types: [String],
    quantities: [Number],
    output: Number
});

module.exports = mongoose.model('Alloy', alloySchema);