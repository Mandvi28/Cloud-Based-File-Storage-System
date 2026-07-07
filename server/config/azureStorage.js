const { BlobServiceClient } = require("@azure/storage-blob");

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("Azure Storage Connection String is missing in .env");
}

const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);

const containerClient = blobServiceClient.getContainerClient(
  process.env.AZURE_STORAGE_CONTAINER_NAME
);

module.exports = containerClient;