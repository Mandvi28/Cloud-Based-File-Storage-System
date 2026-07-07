require("dotenv").config();

const containerClient = require("./config/azureStorage");

async function testAzure() {
  try {
    console.log("Container Name:", containerClient.containerName);

    const exists = await containerClient.exists();

    if (exists) {
      console.log("✅ Azure Blob Storage Connected Successfully");
    } else {
      console.log("❌ Container not found");
    }
  } catch (error) {
    console.error("❌ Azure Connection Failed");
    console.error(error.message);
  }
}

testAzure();