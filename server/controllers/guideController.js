const guideModel = require('../models/GuideModel');



module.exports = {

  list: (req, res, next) => {
    guideModel.find({})
      .then(g => res.status(200).json(g))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  show: (req, res, next) => {
    const id = req.params.id;
    guideModel.findById(req.params.id)
      .then(g => res.status(200).json(g))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  create: (req, res, next) => { //duda crear listas por los usuarios
    const {
      auth,
      pointOfInterest
    } = req.body;
    const guide = new guideModel({
      auth: req.body.auth,
      pointOfInterest: req.body.pointOfInterest
    });

    guide.save()
      .then(p => res.status(200).json({
        message: 'New Guide created!',
        guide: g
      }))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  update: (req, res, next) => {
    const {
      auth,
      pointOfInterest
    } = req.body;
    const updates = {
      auth,
      pointOfInterest
    };

    guideModel.findByIdAndUpdate(req.params.id, updates, {
        new: true
      })
      .then(g => res.status(200).json(g))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  remove: (req, res, next) => {
    guideModel.findByIdAndRemove(req.params.id)
      .then(g => res.status(200).json(g))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  }
};
