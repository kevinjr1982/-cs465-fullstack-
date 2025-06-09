// app_api/controllers/trips.js
const mongoose = require("mongoose");

// Load the trips schema (if not already loaded by db.js, you can load it here too)
// Since this file is in app_api/controllers, and the models folder is a sibling, use "../models/trips"
require("../models/trips");

// Retrieve the registered model from Mongoose.
const Trip = mongoose.model("trips");

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: "Trip not found" });
    }
    return res.status(200).json(trips);
  } catch (err) {
    console.error("Error fetching trips:", err);
    return res.status(500).json({ error: err.message });
  }
};

// GET a trip (or trips) by code
const tripsFindCode = async (req, res) => {
  try {
    const trips = await Trip.find({ code: req.params.tripCode });
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: "Trip not found" });
    }
    return res.status(200).json(trips);
  } catch (err) {
    console.error("Error fetching trip by code:", err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindCode,
};
