var express = require('express');
var router = express.Router();
var signupController = require('../controllers/signupController');

router.get('/', signupController.index);
router.post('/', signupController.create);
router.get('/faker', signupController.fakerCreate);

module.exports = router;