const express = require("express");
const router = express.Router();
const travelController = require("../controllers/travel");

// Route to render the travel view with all trips.
router.get("/travel", travelController.travel);

// Route to render a detail view of a single trip using its trip code.
router.get("/travel/:tripCode", travelController.travelDetail);

module.exports = router;
