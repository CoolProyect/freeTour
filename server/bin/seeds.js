const mongoose = require('mongoose')
const City = require('../controllers/cityController')
const PointInterest = require('../controllers/pointOfInterestController')
const dbURL = process.env.DBURL || 'mongodb://localhost/freeTour';

mongoose.connect(dbURL)
