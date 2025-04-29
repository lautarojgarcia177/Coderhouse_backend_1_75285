const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // D:\Coderhouse\Comision 75285 - Backend (vivo)\Coderhouse_backend_1_75285\public\img
        cb(null, path.join(__dirname, 'public', 'img'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.fieldname + '.png')
    }
})

const uploader = multer({ storage });

module.exports = {
    uploader,
}