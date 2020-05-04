const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'images', 'profilePhotos'))
    },
    filename: function (req, file, cb) {
        cb(null, req.session.user.username + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

module.exports = upload;