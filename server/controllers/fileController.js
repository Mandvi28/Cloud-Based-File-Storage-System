const { v4: uuidv4 } = require("uuid");
const containerClient = require("../config/azureStorage");
const File = require("../models/File");

/* =========================
   Upload File
========================= */
const uploadFile = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Create unique file name
    const uniqueFileName = `${uuidv4()}-${req.file.originalname}`;

    // Azure Blob Client
    const blockBlobClient = containerClient.getBlockBlobClient(uniqueFileName);

    // Upload file to Azure
    await blockBlobClient.uploadData(req.file.buffer);

    // Save metadata to MongoDB
    const newFile = await File.create({
      fileName: uniqueFileName,
      originalName: req.file.originalname,
      fileUrl: blockBlobClient.url,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      uploadedBy: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file: newFile,
    });

  } catch (error) {

    console.error("UPLOAD ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "File upload failed",
      error: error.message,
    });

  }
};

/* =========================
   Get Logged-in User Files
========================= */
const getMyFiles = async (req, res) => {
  try {

    const files = await File.find({
      uploadedBy: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: files.length,
      files,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch files",
    });

  }
};

/* =========================
   Delete File
========================= */
const deleteFile = async (req, res) => {
  try {

    // Find file in MongoDB
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    // Check ownership
    if (file.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Delete from Azure Blob Storage
    const blockBlobClient = containerClient.getBlockBlobClient(file.fileName);
    await blockBlobClient.deleteIfExists();

    // Delete from MongoDB
    await File.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete file",
      error: error.message,
    });

  }
};

module.exports = {
  uploadFile,
  getMyFiles,
  deleteFile,
};