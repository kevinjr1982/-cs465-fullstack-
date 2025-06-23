// app_api/controllers/trips.js
const mongoose = require("mongoose");

// Load the trips schema
require("../models/trips");

// Retrieve the registered model from Mongoose
const Trip = mongoose.model("trips");

// GET all trips (public endpoint)
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).sort({ createdAt: -1 });
    
    if (!trips || trips.length === 0) {
      return res.status(200).json([]);
    }
    
    return res.status(200).json(trips);
  } catch (err) {
    console.error("Error fetching trips:", err);
    return res.status(500).json({ 
      message: "Error fetching trips",
      error: err.message 
    });
  }
};

// GET a trip by ID (public endpoint)
const tripsGetOne = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);
    
    if (!trip) {
      return res.status(404).json({ 
        message: "Trip not found" 
      });
    }
    
    return res.status(200).json(trip);
  } catch (err) {
    console.error("Error fetching trip:", err);
    
    if (err.name === 'CastError') {
      return res.status(400).json({ 
        message: "Invalid trip ID format" 
      });
    }
    
    return res.status(500).json({ 
      message: "Error fetching trip",
      error: err.message 
    });
  }
};

// GET trips by code (public endpoint)
const tripsFindCode = async (req, res) => {
  try {
    const trips = await Trip.find({ 
      code: req.params.tripCode.toUpperCase() 
    });
    
    if (!trips || trips.length === 0) {
      return res.status(404).json({ 
        message: "Trip not found" 
      });
    }
    
    return res.status(200).json(trips);
  } catch (err) {
    console.error("Error fetching trip by code:", err);
    return res.status(500).json({ 
      message: "Error fetching trip by code",
      error: err.message 
    });
  }
};

// POST create new trip (protected endpoint)
const tripsCreate = async (req, res) => {
  try {
    const { code, name, length, start, resort, perPerson, image, description } = req.body;

    // Validate required fields
    if (!code || !name || !length || !start || !resort || !perPerson || !image || !description) {
      return res.status(400).json({
        message: "All fields are required: code, name, length, start, resort, perPerson, image, description"
      });
    }

    // Check if trip with same code already exists
    const existingTrip = await Trip.findOne({ code: code.toUpperCase() });
    if (existingTrip) {
      return res.status(400).json({
        message: "Trip with this code already exists"
      });
    }

    // Create new trip
    const trip = new Trip({
      code: code.toUpperCase(),
      name,
      length,
      start,
      resort,
      perPerson,
      image,
      description,
      createdBy: req.userId
    });

    const savedTrip = await trip.save();

    res.status(201).json({
      message: "Trip created successfully",
      trip: savedTrip
    });

  } catch (error) {
    console.error("Error creating trip:", error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Trip with this code already exists"
      });
    }
    
    res.status(500).json({
      message: "Error creating trip",
      error: error.message
    });
  }
};

// PUT update trip (protected endpoint)
const tripsUpdateOne = async (req, res) => {
  try {
    const tripId = req.params.tripId;
    const { code, name, length, start, resort, perPerson, image, description } = req.body;

    // Validate required fields
    if (!code || !name || !length || !start || !resort || !perPerson || !image || !description) {
      return res.status(400).json({
        message: "All fields are required: code, name, length, start, resort, perPerson, image, description"
      });
    }

    // Check if trip exists
    const existingTrip = await Trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).json({
        message: "Trip not found"
      });
    }

    // Check if another trip with same code exists (excluding current trip)
    const duplicateTrip = await Trip.findOne({ 
      code: code.toUpperCase(),
      _id: { $ne: tripId }
    });
    
    if (duplicateTrip) {
      return res.status(400).json({
        message: "Another trip with this code already exists"
      });
    }

    // Update trip
    const updatedTrip = await Trip.findByIdAndUpdate(
      tripId,
      {
        code: code.toUpperCase(),
        name,
        length,
        start,
        resort,
        perPerson,
        image,
        description,
        updatedBy: req.userId
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Trip updated successfully",
      trip: updatedTrip
    });

  } catch (error) {
    console.error("Error updating trip:", error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        message: "Invalid trip ID format"
      });
    }
    
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Trip with this code already exists"
      });
    }
    
    res.status(500).json({
      message: "Error updating trip",
      error: error.message
    });
  }
};

// PATCH partially update trip (protected endpoint)
const tripsPatchOne = async (req, res) => {
  try {
    const tripId = req.params.tripId;
    const updates = req.body;

    // Check if trip exists
    const existingTrip = await Trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).json({
        message: "Trip not found"
      });
    }

    // If code is being updated, check for duplicates
    if (updates.code) {
      const duplicateTrip = await Trip.findOne({ 
        code: updates.code.toUpperCase(),
        _id: { $ne: tripId }
      });
      
      if (duplicateTrip) {
        return res.status(400).json({
          message: "Another trip with this code already exists"
        });
      }
      
      updates.code = updates.code.toUpperCase();
    }

    // Add updatedBy field
    updates.updatedBy = req.userId;

    // Update trip
    const updatedTrip = await Trip.findByIdAndUpdate(
      tripId,
      updates,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Trip updated successfully",
      trip: updatedTrip
    });

  } catch (error) {
    console.error("Error patching trip:", error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        message: "Invalid trip ID format"
      });
    }
    
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Trip with this code already exists"
      });
    }
    
    res.status(500).json({
      message: "Error updating trip",
      error: error.message
    });
  }
};

// DELETE trip (protected endpoint)
const tripsDeleteOne = async (req, res) => {
  try {
    const tripId = req.params.tripId;

    // Check if trip exists
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({
        message: "Trip not found"
      });
    }

    // Delete trip
    await Trip.findByIdAndDelete(tripId);

    res.status(200).json({
      message: "Trip deleted successfully",
      deletedTrip: {
        id: trip._id,
        name: trip.name,
        code: trip.code
      }
    });

  } catch (error) {
    console.error("Error deleting trip:", error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        message: "Invalid trip ID format"
      });
    }
    
    res.status(500).json({
      message: "Error deleting trip",
      error: error.message
    });
  }
};

module.exports = {
  tripsList,
  tripsGetOne,
  tripsFindCode,
  tripsCreate,
  tripsUpdateOne,
  tripsPatchOne,
  tripsDeleteOne
};

