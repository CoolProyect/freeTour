var express = require('express');
var router = express.Router();
var PointOfInterestController = require('../controllers/PointOfInterestController.js');

/*
 * GET
 */
router.get('/', PointOfInterestController.list);

/*
 * GET
 */
router.get('/:id', PointOfInterestController.show);

/*
 * POST
 */
router.post('/', PointOfInterestController.create);

/*
 * PUT
 */
router.put('/:id', PointOfInterestController.update);

/*
 * DELETE
 */
router.delete('/:id', PointOfInterestController.remove);

module.exports = router;
