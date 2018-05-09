const express = require('express');
const router = express.Router();

const eat = require('./app/eat/eat_controller.js');

router.get('/', (req, res) => {
    eat.selectAll((restaurants) => res.render('index', { restaurants }));
});
router.post('/eats', (req, res) => {
    eat.insertOne(req.body.restaurant_name, (data) => res.redirect('/'));
});
router.put('/eats/:id', (req, res) => {
    eat.updateOne('eaten', 1, req.params.id, (data) => res.redirect('/'));
});

// catch-all for incorrect get requests
router.get('*', (req, res) => {
    res.send('404')
});

module.exports = router;