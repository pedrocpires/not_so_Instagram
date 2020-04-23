var express = require('express');
var router = express.Router();
var loginController = require('../models/loginController');

router.get('/', loginController.loginAccountForm);
router.post('/', loginController.loginAccount);

router.get('/signup', loginController.createAccountForm);
router.post('/signup', loginController.createAccount);

module.exports = router;