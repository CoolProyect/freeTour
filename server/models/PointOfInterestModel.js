const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pointOfInterestSchema = new Schema({
	'lat' : Number,
	'lng' : Number,
	'description' : String,
	'photo' : String,
	'city' : String
});

module.exports = mongoose.model('PointOfInterest', pointOfInterestSchema);
