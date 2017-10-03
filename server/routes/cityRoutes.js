var express = require('express');
var router = express.Router();
var CityController = require('../controllers/CityController');
const checkIDParam = require('../middlewares/checkIfExists')


router.get('/city', CityController.list);
router.get('/city/:id',checkIDParam, CityController.show);
router.post('/city/new', CityController.create);
router.put('/city/:id/edit',checkIDParam, CityController.update);
router.delete('/city/:id/delete', checkIDParam,CityController.remove);

module.exports = router;
