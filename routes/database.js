var express = require('express');
var router = express.Router();
var databaseController = require('../controllers/databaseController');

router.get('/', databaseController.databaseView);
router.get('/faker', databaseController.fakerCreate);
router.get('/truncate', databaseController.truncateTable);
router.get('/delete:id', databaseController.deleteUser)

module.exports = router;
