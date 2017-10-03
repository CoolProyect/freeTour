const cityModel = require('../models/CityModel.js');


module.exports = {


  list: (req, res, next) => {
    cityModel.find({})
      .then(city => res.status(200).json(city))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  show: (req, res, next) => {
    cityModel.findById(req.params.id)
      .then(city => res.status(200).json(city))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  create: (req, res, next) => {
    const City = new cityModel({
      name: req.body.name,
      photo: req.body.photo,
      pointOfInterest: req.body.pointOfInterest,
      description: req.body.description

    });

    City.save()
      .then( c => res.status(200).json({message: 'New city created!',city: c}))
      .catch( e => res.status(500).json({
        error: e.message
      }))
  },

  update: (req, res, next) => {
    const {name, photo, pointOfInterest, description} = req.body
    cityModel.findByIdAndUpdate(req.params.id)
      .then(city => res.status(200).json(city))
      .catch(e => res.status(500).json({error:e.message}))
    },

    remove: (req, res, next) => {
    cityModel.findByIdAndRemove(req.params.id)
      .then(city => res.status(200).json(city))
      .catch(e => res.status(500).json({error:e.message}))
  }
};
