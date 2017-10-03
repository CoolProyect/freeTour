const express = require('express');
const router = express.Router();
const PointOfInterestController = require('../controllers/pointOfInterestController');
const checkIDParam = require('../middelwares/checkIfExists')
router.get('/', PointOfInterestController.list);
router.get('/:id',checkIDParam, PointOfInterestController.show);
router.post('/', PointOfInterestController.create);
router.put('/:id',checkIDParam, PointOfInterestController.update);
router.delete('/:id', checkIDParam, PointOfInterestController.remove);

module.exports = router;
