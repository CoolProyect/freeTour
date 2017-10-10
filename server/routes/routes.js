const router = require('express').Router()
const cityController = require('../controllers/cityController')
const pointOfInterestController = require('../controllers/pointOfInterestController')
const guideController = require('../controllers/guideController')
const checkIDParam = require('../middlewares/checkIfExists')


router.get('/guides', guideController.list)
router.get('/guides/', checkIDParam, guideController.show)
router.post('/guides/new', guideController.create)
router.put('/guides//edit', checkIDParam, guideController.update)
router.get('/guides//delete', checkIDParam, guideController.remove)

router.get('/city', cityController.list)
router.get('/city/', checkIDParam, cityController.show)
router.post('/city/new', cityController.create)
router.put('/city//edit', checkIDParam, cityController.update)
router.delete('/city//delete', checkIDParam, cityController.remove)

router.get('/point-interest', pointOfInterestController.list)
router.get('/point-interest/gmaps', pointOfInterestController.point)
router.get('/point-interest/gmaps', pointOfInterestController.marker)
router.post('/point-interest/new', pointOfInterestController.create)

router.get('/point-interest/', checkIDParam, pointOfInterestController.show)
router.put('/point-interest//edit', checkIDParam, pointOfInterestController.update)
router.delete('/point-interest//delete', checkIDParam, pointOfInterestController.remove)


module.exports = router
