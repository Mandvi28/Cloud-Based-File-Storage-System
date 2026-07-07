const { v4: uuidv4 } = require("uuid");
const containerClient = require("../config/azureStorage");
const File = require("../models/File");

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

      // Temporary user ID
      // We'll replace this with JWT authentication in the next step.
      uploadedBy: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file: newFile,
    });
  } 

catch (error) {
  console.error("UPLOAD ERROR:");
  console.error(error);

  return res.status(500).json({
    success: false,
    message: "File upload failed",
    error: error.message,
  });
}
};







module.exports = {
  uploadFile,
};