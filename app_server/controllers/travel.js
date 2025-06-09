// app_server/controllers/travel.js

// If Node v18+ is used, fetch is global; otherwise, uncomment the next line.
// const fetch = require('node-fetch');

const apiBase = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

/**
 * travel:
 * - Fetches all trips from the API endpoint.
 * - Renders the 'travel' view with the fetched trips data.
 */
const travel = async (req, res) => {
  try {
    const response = await fetch(apiBase, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch trips: ${response.statusText}`);
    }
    const trips = await response.json();
    res.render('travel', { title: 'Travlr Getaways', trips });
  } catch (err) {
    console.error('Fetch error:', err);
    res.render('error', { message: 'Error retrieving trips data.' });
  }
};

/**
 * travelDetail:
 * - Extracts the trip code via req.params
 * - Fetches a single trip from the API based on that code.
 * - Renders the 'travelDetail' view with the trip data.
 */
const travelDetail = async (req, res) => {
  try {
    const tripCode = req.params.tripCode;
    const endpointWithCode = `${apiBase}/${tripCode}`;
    const response = await fetch(endpointWithCode, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch trip with code ${tripCode}: ${response.statusText}`);
    }
    const trip = await response.json();
    if (!trip) {
      return res.status(404).render('error', { message: 'Trip not found.' });
    }
    res.render('travelDetail', { title: 'Trip Details', trip });
  } catch (err) {
    console.error('Fetch error:', err);
    res.render('error', { message: 'Error retrieving trip data.' });
  }
};

// Export the controller functions
module.exports = {
  travel,
  travelDetail
};
