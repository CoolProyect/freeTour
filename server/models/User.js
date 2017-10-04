const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const upload = require('../config/multer')

const userSchema = new Schema({
  username: String,
  password: String,
  image: {
   type: String, default: ''
 },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
