var express = require('express');
var router = express.Router();
var followController = require('../controllers/followController')
var auth = require('../middlewares/auth')


/* GET home page. */
router.post('/', followController.store);
router.post('/unfollow', followController.destroy)

module.exports = router;