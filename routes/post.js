var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');
var upload = require('../middlewares/uploadFile')

router.get('/newpost', postController.create);
router.post('/newpost', upload.any(), postController.store);
router.get('/:id', postController.index);


module.exports = router;
