var CityModel = require('../models/CityModel.js');

/**
 * CityController.js
 *
 * @description :: Server-side logic for managing Citys.
 */
module.exports = {

    /**
     * CityController.list()
     */
    list: function (req, res) {
        CityModel.find(function (err, Citys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting City.',
                    error: err
                });
            }
            return res.json(Citys);
        });
    },

    /**
     * CityController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        CityModel.findOne({_id: id}, function (err, City) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting City.',
                    error: err
                });
            }
            if (!City) {
                return res.status(404).json({
                    message: 'No such City'
                });
            }
            return res.json(City);
        });
    },

    /**
     * CityController.create()
     */
    create: function (req, res) {
        var City = new CityModel({
			name : req.body.name,
			photo : req.body.photo,
			pointOfInterest : req.body.pointOfInterest,
			description : req.body.description

        });

        City.save(function (err, City) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating City',
                    error: err
                });
            }
            return res.status(201).json(City);
        });
    },

    /**
     * CityController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        CityModel.findOne({_id: id}, function (err, City) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting City',
                    error: err
                });
            }
            if (!City) {
                return res.status(404).json({
                    message: 'No such City'
                });
            }

            City.name = req.body.name ? req.body.name : City.name;
			City.photo = req.body.photo ? req.body.photo : City.photo;
			City.pointOfInterest = req.body.pointOfInterest ? req.body.pointOfInterest : City.pointOfInterest;
			City.description = req.body.description ? req.body.description : City.description;
			
            City.save(function (err, City) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating City.',
                        error: err
                    });
                }

                return res.json(City);
            });
        });
    },

    /**
     * CityController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        CityModel.findByIdAndRemove(id, function (err, City) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the City.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
