var express = require('express');
var router = express.Router();
var CityController = require('../controllers/CityController.js');

/*
 * GET
 */
router.get('/', CityController.list);

/*
 * GET
 */
router.get('/:id', CityController.show);

/*
 * POST
 */
router.post('/', CityController.create);

/*
 * PUT
 */
router.put('/:id', CityController.update);

/*
 * DELETE
 */
router.delete('/:id', CityController.remove);

module.exports = router;
