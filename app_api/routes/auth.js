// app_api/routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const auth = require("../middleware/auth");

// POST /api/auth/register - Register new user
router.post("/register", authController.register);

// POST /api/auth/login - Login user
router.post("/login", authController.login);

// GET /api/auth/me - Get current user (protected)
router.get("/me", auth, authController.getCurrentUser);

// POST /api/auth/logout - Logout user
router.post("/logout", authController.logout);

module.exports = router;

