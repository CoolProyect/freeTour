var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var pointOfInterestSchema = new Schema({
	'lng' : Number,
	'lt' : Number,
	'description' : String,
	'photo' : String,
	'city' : String
});

module.exports = mongoose.model('PointOfInterest', pointOfInterestSchema);
