var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var guideSchema = new Schema({
	'auth' : String,
	'pointOfInterest' : String
});

module.exports = mongoose.model('Guide', guideSchema);
