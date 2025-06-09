
// app_api/database/db.js
const mongoose = require("mongoose");
const dbURL = "mongodb://127.0.0.1:27017/travlr";
const readLine = require("readline");

// Connect to the database using Mongoose
mongoose.connect(dbURL)
  .then(() => console.log(`Mongoose connected to ${dbURL}`))
  .catch(err => console.error("Mongoose connection error:", err));

// Load the trips schema so it is registered with Mongoose.
// Since this file is in app_api/database, and models is a sibling folder, use "../models/trips"
require("../models/trips");

// Set up listeners for mongoose connection events
mongoose.connection.on("connected", () => {
  console.log("Mongoose connection established");
});
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection disconnected");
});

// Gracefully shut down Mongoose connection when Node process ends
const gracefulShutdown = async (msg) => {
  try {
    await mongoose.connection.close();
    console.log(`Mongoose disconnected through ${msg}`);
  } catch (error) {
    console.error("Error closing Mongoose connection:", error);
  } finally {
    process.exit(0);
  }
};

process.on("SIGINT", async () => {
  await gracefulShutdown("app termination (SIGINT)");
});
process.on("SIGTERM", async () => {
  await gracefulShutdown("app termination (SIGTERM)");
});

// Windows-specific SIGINT handling (if needed)
if (process.platform === "win32") {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("SIGINT", () => {
    process.emit("SIGINT");
  });
};

module.exports = mongoose;
