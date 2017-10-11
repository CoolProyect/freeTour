const pointOfInterestModel = require('../models/PointOfInterest')
const axios = require('axios')

module.exports = {

  list: (req, res, next) => {
    pointOfInterestModel.find({})
      .then(pointOfInterest => res.status(200).json(pointOfInterest))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  show: (req, res, next) => {
    const id = req.params.id;
    pointOfInterestModel.findById(req.params.id)
      .then(point => res.status(200).json(point))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  create: (req, res, next) => {
    const pointOfInterest = new pointOfInterestModel({
      lat: req.body.lat,
      lng: req.body.lng,
      description: req.body.description,
      photo: req.body.photo,
      city: req.body.city
    });

    pointOfInterest.save()
      .then(point => res.status(200).json({
        message: 'New point of interest created!',
        pointI: point
      }))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  update: (req, res, next) => {
    const {
      lat,
      lng,
      description,
      photo,
      city
    } = req.body;
    const updates = {
      lat,
      lng,
      description,
      photo,
      city
    }
    pointOfInterestModel.findByIdAndUpdate(req.params.id, updates, {
        new: true
      })
      .then(point => res.status(200).json(point))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  remove: (req, res, next) => {
    pointOfInterestModel.findByIdAndRemove(req.params.id)
      .then(point => res.status(200).json(point))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  point: (req, res, next) => {
    const city = req.query.city;
    console.log(`Getting google maps data from "${city}"`)
    const gmaps_url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
    axios.get(gmaps_url, {
        params: {
          key: process.env.KEYGOOGLE,
          query: "point of interest " + city
        }
      })
      .then(response => {
        console.log(response)
        res.json(response.data.results)
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({
          error: e.message
        });
      })
  },

  marker: (req, res, next) => {
    const markers = req.query.markers;
    console.log(`Getting google maps data from "${lat, lng}"`)
    const gmaps_url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
    axios.get(gmaps_url, {
        params: {
          key: process.env.KEYGOOGLE,
          query: "point of interest " + city
        }
      })
      .then(response => {
        console.log(response)
        res.json(response.data.results.geometry.location)
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({
          error: e.message
        });
      })
  }
};