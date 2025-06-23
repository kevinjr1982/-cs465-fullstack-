// app_api/middleware/auth.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET || "travlr-super-secret-jwt-key-2024";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    
    if (!authHeader) {
      return res.status(401).json({ 
        message: "Access denied. No authorization header provided." 
      });
    }

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ 
        message: "Access denied. Invalid authorization format. Use 'Bearer <token>'" 
      });
    }

    const token = authHeader.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ 
        message: "Access denied. No token provided." 
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    
    if (!user) {
      return res.status(401).json({ 
        message: "Access denied. User not found." 
      });
    }

    req.user = user;
    req.userId = user._id;
    
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ 
        message: "Access denied. Invalid token." 
      });
    }
    
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ 
        message: "Access denied. Token has expired." 
      });
    }
    
    res.status(500).json({ 
      message: "Server error during authentication." 
    });
  }
};

module.exports = auth;

