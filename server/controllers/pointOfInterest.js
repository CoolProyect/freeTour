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
          key: 'AIzaSyD4P839qGLJs-mBgdun4r-HyQPuIC46Hms',
          query: "point of interest " + city
        }
      })
      .then(response => {
        console.log('LA RESPUESTA DE PUNTOS DE INTERES DE UNA CIUDAD DE GOOGLE', response)
        res.json(response.data.results)
      }).catch(e => res.status(500).json({ error: e.message }))
  },

  // details: (req, res, next) => {
  //   const wiki_url = 'https://es.wikipedia.org/w/api.php?action=opensearch&format=json'
  //       axios.get(wiki_url, { params: { search: "Trafalgar Square" } }).then(result => {
  //         console.log(result.data);
  //         const place = {
  //           name: result.data[0],
  //           description: result.data[2][0],
  //           link: result.data[3][0]
  //         }
  //         res.status(200).json(place)
  //         console.log('Respuesta de la mezcla con wiki ===>', resp.data.result);
  //       }).catch( e => res.status(500).json({ error : e.message}))
  // }
  // ------- //

  details: (req, res, next) => {
    const id = req.query.place;
    console.log('Estoy en Back. En la funcion DETAILS', id)
    const gdetails_url = 'https://maps.googleapis.com/maps/api/place/details/json'
    axios.get(gdetails_url, {
        params: {
          placeid: id,
          key: process.env.KEYGOOGLEDETAILS
        }
      })
      .then(resp => {
        const place_name = resp.data.result.name
        console.log("el valor de place_name", place_name);
        const wiki_url = 'https://es.wikipedia.org/w/api.php?action=opensearch&format=json'

        axios.get(wiki_url, { params: { search: place_name } }).then(result => {
          resp.data.result.place = {
            name: result.data[0],
            description: result.data[2][0],
            link: result.data[3][0]
          }
          // res.status(200).json(resp.data.result)
          res.status(200).json(resp.data.result)
          console.log('Respuesta de la mezcla con wiki ===>', resp.data.result);
        }).catch( e => res.status(500).json({ error : e.message}))
     }).catch(e => res.status(500).json({ error: e.message }))
  }

  // ------- //

};
