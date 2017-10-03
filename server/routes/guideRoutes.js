const express = require('express');
const router = express.Router();
const guideController = require('../controllers/GuideController.js');

/*
 * GET
 */
router.get('/', guideController.list);

/*
 * GET
 */
router.get('/:id', guideController.show);

/*
 * POST
 */
router.post('/', guideController.create);

/*
 * PUT
 */
router.put('/:id', guideController.update);

/*
 * DELETE
 */
router.delete('/:id', guideController.remove);

module.exports = router;
