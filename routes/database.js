var express = require('express');
var router = express.Router();
var databaseController = require('../controllers/databaseController');

router.get('/', databaseController.index);
router.get('/faker', databaseController.create);
router.get('/truncate', databaseController.truncate);
router.get('/delete:id', databaseController.destroy);
router.get('/:id', databaseController.show);

module.exports = router;
