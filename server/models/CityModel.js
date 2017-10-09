const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  'name': String,
  'photo': String,
  'pointOfInterest': {
    type: Schema.Types.ObjectId,
    ref: 'PointOfInterest'
  },
  'description': String
});

module.exports = mongoose.model('City', citySchema);
