var guideModel = require('../models/guideModel.js');

/**
 * guideController.js
 *
 * @description :: Server-side logic for managing guides.
 */
module.exports = {

    /**
     * guideController.list()
     */
    list: function (req, res) {
        guideModel.find(function (err, guides) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting guide.',
                    error: err
                });
            }
            return res.json(guides);
        });
    },

    /**
     * guideController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        guideModel.findOne({_id: id}, function (err, guide) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting guide.',
                    error: err
                });
            }
            if (!guide) {
                return res.status(404).json({
                    message: 'No such guide'
                });
            }
            return res.json(guide);
        });
    },

    /**
     * guideController.create()
     */
    create: function (req, res) {
        var guide = new guideModel({
			auth : req.body.auth,
			pointOfInterest : req.body.pointOfInterest

        });

        guide.save(function (err, guide) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating guide',
                    error: err
                });
            }
            return res.status(201).json(guide);
        });
    },

    /**
     * guideController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        guideModel.findOne({_id: id}, function (err, guide) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting guide',
                    error: err
                });
            }
            if (!guide) {
                return res.status(404).json({
                    message: 'No such guide'
                });
            }

            guide.auth = req.body.auth ? req.body.auth : guide.auth;
			guide.pointOfInterest = req.body.pointOfInterest ? req.body.pointOfInterest : guide.pointOfInterest;
			
            guide.save(function (err, guide) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating guide.',
                        error: err
                    });
                }

                return res.json(guide);
            });
        });
    },

    /**
     * guideController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        guideModel.findByIdAndRemove(id, function (err, guide) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the guide.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
