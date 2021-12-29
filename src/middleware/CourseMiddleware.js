const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const storage = new GridFsStorage({
  url: "mongodb+srv://teerapat:Earth241043+@cluster0.fa0u1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: "imageBucket",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({
  storage,
});
module.exports = upload;
