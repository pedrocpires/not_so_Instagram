var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'not_so_Instagram' });
});

module.exports = router;
