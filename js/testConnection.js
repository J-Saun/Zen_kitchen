// testConnection.js

import MongoDBService from "./classes/Database.js";
import mongoose from "mongoose";

async function testConnection() {
  const dbService = new MongoDBService();

  try {
    // Connect to MongoDB
    await dbService.connect();

    // Connection successful
    console.log("Connection to MongoDB successful");

    // Optionally, perform additional testing or implementation here
  } catch (error) {
    // Connection failed
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Disconnect from MongoDB
    await dbService.disconnect();
  }
}

// Run the test function
testConnection()
  .then(() => {
    console.log("Test complete"); // Add this to check if the function completes
  })
  .catch((err) => {
    console.error("Error running test:", err);
  });
