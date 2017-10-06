const router = require('express').Router()
const cityController = require('../controllers/cityController')
const pointOfInterestController = require('../controllers/pointOfInterestController')
const guideController = require('../controllers/guideController')
const checkIDParam = require('../middlewares/checkIfExists')


router.get('/guides', guideController.list)
router.get('/guides/:id', checkIDParam, guideController.show)
router.post('/guides/new', guideController.create)
router.put('/guides/:id/edit', checkIDParam, guideController.update)
router.get('/guides/:id/delete', checkIDParam,guideController.remove)

router.get('/city', cityController.list)
router.get('/city/:id',checkIDParam, cityController.show)
router.post('/city/new', cityController.create)
router.put('/city/:id/edit',checkIDParam, cityController.update)
router.delete('/city/:id/delete', checkIDParam,cityController.remove)

router.get('/point-interest', pointOfInterestController.list)
router.get('/point-interest/gmaps', pointOfInterestController.point)
router.post('/point-interest/new', pointOfInterestController.create)

router.get('/point-interest/:id',checkIDParam, pointOfInterestController.show)
router.put('/point-interest/:id/edit',checkIDParam, pointOfInterestController.update)
router.delete('/point-interest/:id/delete', checkIDParam, pointOfInterestController.remove)


module.exports = router
