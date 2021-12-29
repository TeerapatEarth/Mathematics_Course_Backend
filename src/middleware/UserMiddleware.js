const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  filename: function (req, file, callback) {
    // set file name
    callback(
      null,
      `${file.originalname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload