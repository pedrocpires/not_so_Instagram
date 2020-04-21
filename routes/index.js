var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'not_so_Instagram' });
});

router.get('/', function(req, res, next) {
  res.render('login', { title: 'not_so_Instagram' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'not_so_Instagram' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'not_so_Instagram' });
});

module.exports = router;
