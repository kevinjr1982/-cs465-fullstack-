const express = require('express');
const router = express.Router();
//const travlrController = require('../controllers/travel').default; // Ensure the path is correct
const travlrController = require('../controllers/travlr');


router.get('travel', travlrController.travlr); //Ensure 'travlr' is correctly referenced

module.exports = router;
