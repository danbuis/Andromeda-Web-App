var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var corporationSchema = new Schema({
    name: String,
    description: String,
    specialty: String
});

module.exports = mongoose.model('Corporation', corporationSchema);