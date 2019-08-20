var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var resourceSchema = new Schema({
    name: String,
    mass: Number,
    volume: Number,
    description: String
});

module.exports = mongoose.model('Resource', resourceSchema);