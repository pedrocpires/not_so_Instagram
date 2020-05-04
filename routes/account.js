var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController');
var upload = require('../middlewares/uploadFile')

router.get('/edit', accountController.index);
router.post('/edit', accountController.update);
router.get('/logout', accountController.logout);
router.post('/edit/updatePhoto', upload.any(), accountController.updatePhoto);

module.exports = router;