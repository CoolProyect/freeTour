const router = require('express').Router()
const cityController = require('../controllers/cityController.js')
const PointOfInterestController = require('../controllers/PointOfInterestController.js')
const guideController = require('../controllers/guideController')
const checkIDParam = require('../middlewares/checkIfExists')


router.get('/guides', guideController.list)
router.get('/guides/:id', checkIDParam, guideController.show)
router.post('/guides/new', guideController.create)
router.put('/guides/:id/edit', checkIDParam, guideController.update)
router.get('/guides/:id/delete', checkIDParam,guideController.remove)

module.exports = router
