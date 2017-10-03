const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const guideSchema = new Schema({
	'auth' : {type: Schema.Types.ObjectId, ref:'User'},
	'pointOfInterest' : {type: Schema.Types.ObjectId, ref:'PointOfInterest'}
});

module.exports = mongoose.model('Guide', guideSchema);
