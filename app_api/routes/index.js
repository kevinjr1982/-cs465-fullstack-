// app_api/routes/index.js
const express = require("express");
const router = express.Router();

// Mount the trips router on the '/trips' path.
const tripsRouter = require("./trips");
router.use("/trips", tripsRouter);

// You can add additional routes or routers as needed.

module.exports = router;
