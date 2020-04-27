var express = require('express');
var router = express.Router();
var signupController = require('../controllers/signupController');

router.get('/', signupController.createAccountForm);
router.post('/', signupController.createAccount);
router.get('/faker', signupController.fakerCreate);

module.exports = router;