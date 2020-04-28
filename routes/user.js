var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var auth = require('../middlewares/auth');


/* GET users listing. */
router.get('/', auth, userController.userView);

module.exports = router;
