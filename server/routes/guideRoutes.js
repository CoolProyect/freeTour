var express = require('express');
var router = express.Router();
var GuideController = require('../controllers/GuideController.js');

/*
 * GET
 */
router.get('/', GuideController.list);

/*
 * GET
 */
router.get('/:id', GuideController.show);

/*
 * POST
 */
router.post('/', GuideController.create);

/*
 * PUT
 */
router.put('/:id', GuideController.update);

/*
 * DELETE
 */
router.delete('/:id', GuideController.remove);

module.exports = router;
