const router = require('express').Router()
const CityController = require('../controllers/city')
const PointOfInterestController = require('../controllers/pointOfInterest')
const GuideController = require('../controllers/guide')
const checkIDParam = require('../middlewares/checkIfExists')


router.get('/guides', GuideController.list)
router.get('/guides/', checkIDParam, GuideController.show)
router.post('/guides/new', GuideController.create)
router.put('/guides/edit', checkIDParam, GuideController.update)
router.get('/guides/delete', checkIDParam, GuideController.remove)

router.get('/city', CityController.list)
router.get('/city/', checkIDParam, CityController.show)
router.post('/city/new', CityController.create)
router.put('/city/edit', checkIDParam, CityController.update)
router.delete('/city/delete', checkIDParam, CityController.remove)

router.get('/point-interest', pointOfInterestController.list)
router.get('/point-interest/gmaps', pointOfInterestController.point)
router.get('/point-interest/gmaps', pointOfInterestController.marker)
router.post('/point-interest/new', pointOfInterestController.create)

router.get('/point-interest/', checkIDParam, PointOfInterestController.show)
router.put('/point-interest/edit', checkIDParam, PointOfInterestController.update)
router.delete('/point-interest/delete', checkIDParam, PointOfInterestController.remove)


module.exports = router
