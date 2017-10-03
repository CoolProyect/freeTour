const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pointOfInterestSchema = new Schema({
	'lat' : Number,
	'lng' : Number,
	'description' : String,
	'photo' : String,
	'city' : String //no sabemos si asociarlo al modelo city
});

module.exports = mongoose.model('PointOfInterest', pointOfInterestSchema);
