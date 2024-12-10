// config/multerConfig.js
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/"); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const date = Date.now();
    const fileExtension = file.mimetype.split("/")[1]; // Extract file extension
    const filename = `${date}.${fileExtension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

module.exports = upload;
