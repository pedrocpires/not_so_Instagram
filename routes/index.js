var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')
var auth = require('../middlewares/auth')


/* GET home page. */
router.get('/', auth, indexController.index);
router.get('/@:username', indexController.show);

module.exports = router;
