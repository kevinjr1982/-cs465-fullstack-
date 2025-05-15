const express = require('express');
const router = express.Router();
const travlrController = require('../controllers/travel'); // Ensure the path is correct


router.get('travel', travlrController.travlr); //Ensure 'travlr' is correctly referenced

module.exports = router;
