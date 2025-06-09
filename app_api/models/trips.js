// app_api/models/trips.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  code: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String
  // Add additional fields as needed.
}, { timestamps: true });

// Register and export the model with the name "trips"
module.exports = mongoose.model("trips", tripSchema);
