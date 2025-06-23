// app_api/models/trips.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  code: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    uppercase: true
  },
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  length: { 
    type: String, 
    required: true,
    trim: true
  },
  start: { 
    type: String, 
    required: true,
    trim: true
  },
  resort: { 
    type: String, 
    required: true,
    trim: true
  },
  perPerson: { 
    type: String, 
    required: true,
    trim: true
  },
  image: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { 
  timestamps: true 
});

// Register and export the model with the name "trips"
module.exports = mongoose.model("trips", tripSchema);

