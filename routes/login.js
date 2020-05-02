var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');
var auth = require('../middlewares/auth')

router.get('/', loginController.index);
router.post('/', loginController.show);

module.exports = router;