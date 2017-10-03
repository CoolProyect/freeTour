var pointOfInterestModel = require('../models/pointOfInterestModel.js');

/**
 * pointOfInterestController.js
 *
 * @description :: Server-side logic for managing pointOfInterests.
 */
module.exports = {

    /**
     * pointOfInterestController.list()
     */
    list: function (req, res) {
        pointOfInterestModel.find(function (err, pointOfInterests) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pointOfInterest.',
                    error: err
                });
            }
            return res.json(pointOfInterests);
        });
    },

    /**
     * pointOfInterestController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        pointOfInterestModel.findOne({_id: id}, function (err, pointOfInterest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pointOfInterest.',
                    error: err
                });
            }
            if (!pointOfInterest) {
                return res.status(404).json({
                    message: 'No such pointOfInterest'
                });
            }
            return res.json(pointOfInterest);
        });
    },

    /**
     * pointOfInterestController.create()
     */
    create: function (req, res) {
        var pointOfInterest = new pointOfInterestModel({
			lng : req.body.lng,
			lt : req.body.lt,
			description : req.body.description,
			photo : req.body.photo,
			city : req.body.city

        });

        pointOfInterest.save(function (err, pointOfInterest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating pointOfInterest',
                    error: err
                });
            }
            return res.status(201).json(pointOfInterest);
        });
    },

    /**
     * pointOfInterestController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        pointOfInterestModel.findOne({_id: id}, function (err, pointOfInterest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pointOfInterest',
                    error: err
                });
            }
            if (!pointOfInterest) {
                return res.status(404).json({
                    message: 'No such pointOfInterest'
                });
            }

            pointOfInterest.lng = req.body.lng ? req.body.lng : pointOfInterest.lng;
			pointOfInterest.lt = req.body.lt ? req.body.lt : pointOfInterest.lt;
			pointOfInterest.description = req.body.description ? req.body.description : pointOfInterest.description;
			pointOfInterest.photo = req.body.photo ? req.body.photo : pointOfInterest.photo;
			pointOfInterest.city = req.body.city ? req.body.city : pointOfInterest.city;
			
            pointOfInterest.save(function (err, pointOfInterest) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating pointOfInterest.',
                        error: err
                    });
                }

                return res.json(pointOfInterest);
            });
        });
    },

    /**
     * pointOfInterestController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        pointOfInterestModel.findByIdAndRemove(id, function (err, pointOfInterest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the pointOfInterest.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
