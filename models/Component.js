var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var componentSchema = new Schema({
    name: String,
    mass: Number,
    volume: Number,
    description: String,
    type: String,
    types: [String],
    ingredients: [String],
    quantities: [Number],
});

module.exports = mongoose.model('Component', componentSchema);