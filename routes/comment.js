var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController');
var upload = require('../middlewares/uploadFile')

router.post('/:id', commentController.store);



module.exports = router;
