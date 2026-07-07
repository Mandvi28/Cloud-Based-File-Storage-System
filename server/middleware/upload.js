const multer = require("multer");

// Store file temporarily in memory
const storage = multer.memoryStorage();

// File upload middleware
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB
  },
});

module.exports = upload;