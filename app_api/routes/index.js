// app_api/routes/index.js
const express = require("express");
const router = express.Router();

// Import route modules
const tripsRouter = require("./trips");
const authRouter = require("./auth");

// Mount routes
router.use("/trips", tripsRouter);
router.use("/auth", authRouter);

// API health check
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Travlr API is running",
    version: "1.0.0",
    endpoints: {
      trips: "/api/trips",
      auth: "/api/auth"
    }
  });
});

module.exports = router;

