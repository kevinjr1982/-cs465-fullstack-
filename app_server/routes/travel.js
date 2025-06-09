// app_server/routes/travel.js

const express = require("express");
const router = express.Router();

// Note: Adjust the path below if your controllers folder is elsewhere!
const travelController = require("../controllers/travel");

// When the URL is '/travel', call travelController.travel.
router.get("/", travelController.travel);

// When the URL is '/travel/:tripCode', call travelController.travelDetail.
router.get("/:tripCode", travelController.travelDetail);

module.exports = router;

