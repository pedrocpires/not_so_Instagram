var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController');
var upload = require('../middlewares/uploadFile')

router.get('/edit', accountController.index);
router.post('/edit', accountController.update);
router.get('/logout', accountController.logout);
router.post('/edit/updatePhoto', upload.any(), accountController.updatePhoto);
router.get('/newpost', accountController.showNewPost);
router.post('/newpost', upload.any(), accountController.createNewPost);

module.exports = router;