var express = require('express');
var router = express.Router();
var controller = require('../controllers/travlr').default;

/* GET travel page. */
router.exports = router;

module.exports = router;

module.exports.travlr = (req, res) => {
    res.render('index', { title: 'Travlr' }); // new code
};
