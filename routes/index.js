var express = require('express');
var router = express.Router();
var indexController = require('../models/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'not_so_Instagram' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'not_so_Instagram' });
});

module.exports = router;
