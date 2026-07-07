const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

const { uploadFile } = require("../controllers/fileController");

router.get("/test", (req, res) => {
  res.json({ message: "File routes working!" });
});

// Upload File
router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  uploadFile
);

module.exports = router;