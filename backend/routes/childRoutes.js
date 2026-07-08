const express = require('express');
const router = express.Router();
const childController = require('../controllers/childController');
const { verifyToken } = require('../middlewares/auth');

router.get('/', verifyToken, childController.getChildren);
router.post('/', verifyToken, childController.createChild);

module.exports = router;
