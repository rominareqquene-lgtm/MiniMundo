const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { verifyToken } = require('../middlewares/auth');

router.get('/:childId', verifyToken, progressController.getProgress);
router.post('/', verifyToken, progressController.saveProgress);

module.exports = router;
