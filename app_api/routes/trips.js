// app_api/routes/trips.js
const express = require("express");
const router = express.Router();
const tripsController = require("../controllers/trips");

// Route to get all trips
router.get("/", tripsController.tripsList);

// Route to get trip(s) by trip code (e.g., /api/trips/XYZ)
router.get("/:tripCode", tripsController.tripsFindCode);

module.exports = router;
