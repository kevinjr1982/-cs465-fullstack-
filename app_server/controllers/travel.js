/* GET travel view */
const travlr = (req, res) => {
    res.render('travlr', { title: 'Travlr Page' });
};

module.exports = {
    travlr
};