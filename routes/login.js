var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');
var auth = require('../middlewares/auth')

router.get('/', loginController.loginAccountForm);
router.post('/', loginController.loginAccount);

module.exports = router;