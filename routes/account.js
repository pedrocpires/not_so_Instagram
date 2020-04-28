var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController');

router.get('/edit', accountController.editProfileView);
router.post('/edit', accountController.updateProfile)

module.exports = router;