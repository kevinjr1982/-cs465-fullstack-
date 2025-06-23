// app_api/routes/trips.js
const express = require("express");
const router = express.Router();
const tripsController = require("../controllers/trips");
const auth = require("../middleware/auth");

// GET /api/trips - Get all trips (public)
router.get("/", tripsController.tripsList);

// GET /api/trips/:tripId - Get single trip by ID (public)
router.get("/:tripId", tripsController.tripsGetOne);

// GET /api/trips/code/:tripCode - Get trips by code (public)
router.get("/code/:tripCode", tripsController.tripsFindCode);

// POST /api/trips - Create new trip (protected)
router.post("/", auth, tripsController.tripsCreate);

// PUT /api/trips/:tripId - Update trip (protected)
router.put("/:tripId", auth, tripsController.tripsUpdateOne);

// PATCH /api/trips/:tripId - Partially update trip (protected)
router.patch("/:tripId", auth, tripsController.tripsPatchOne);

// DELETE /api/trips/:tripId - Delete trip (protected)
router.delete("/:tripId", auth, tripsController.tripsDeleteOne);

module.exports = router;

