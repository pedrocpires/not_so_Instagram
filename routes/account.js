var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController');

router.get('/edit', accountController.index);
router.post('/edit', accountController.update);
router.get('/logout', accountController.logout)

module.exports = router;