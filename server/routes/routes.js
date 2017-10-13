const router = require('express').Router()
const CityController = require('../controllers/city')
const PointOfInterestController = require('../controllers/pointOfInterest')
const checkIDParam = require('../middlewares/checkIfExists')


router.get('/city', CityController.list)
router.get('/city/', checkIDParam, CityController.show)
router.post('/city/new', CityController.create)
router.put('/city/edit', checkIDParam, CityController.update)
router.delete('/city/delete', checkIDParam, CityController.remove)

router.get('/point-interest', PointOfInterestController.list)
router.get('/point-interest/gmaps', PointOfInterestController.point)
router.get('/point-interest/gmaps/details', PointOfInterestController.details)
router.post('/point-interest/new', PointOfInterestController.create)

router.get('/point-interest/', checkIDParam, PointOfInterestController.show)
router.put('/point-interest/edit', checkIDParam, PointOfInterestController.update)
router.delete('/point-interest/delete', checkIDParam, PointOfInterestController.remove)


module.exports = router
