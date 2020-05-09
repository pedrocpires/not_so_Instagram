const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        switch (req.originalUrl) {
            case '/accounts/edit/updatePhoto':
                cb(null, path.join('public', 'images', 'profilePhotos'));
                break;
            case '/post/newpost':
                cb(null, path.join('public', 'images', 'postPhotos'))
                break;
        }
    },
    filename: function (req, file, cb) {
        switch (req.originalUrl) {
            case '/accounts/edit/updatePhoto':
                cb(null, req.session.user.username + path.extname(file.originalname).toLowerCase())
                break;
            case '/post/newpost':
                cb(null, Date.now() + req.session.user.username + path.extname(file.originalname).toLowerCase())
                break;
        }
    }
})

const upload = multer({
    storage: storage
})

module.exports = upload;