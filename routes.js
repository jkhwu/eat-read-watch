const express = require('express');
const router = express.Router();

const eat = require('./app/eat/eat_controller.js');
const read = require('./app/read/read_controller.js');
const watch = require('./app/watch/watch_controller.js');

// Get All Data
router.get('/', (req, res) => {
    var restaurants;
    var books;
    var movies;
    // Yay callback hell
    eat.selectAll((restData) => {
        restaurants = restData;
        read.selectAll((bookData) => {
            books = bookData;
            watch.selectAll((movieData) => {
                movies = movieData;
                res.render('index', {
                    restaurants: restaurants,
                    books: books,
                    movies: movies
                });
            });
        });
    });
});

// Eat Routes
router.post('/eats', (req, res) => {
    eat.insertOne(req.body.restaurant_name, (data) => res.redirect('/'));
});
router.put('/eats/:id', (req, res) => {
    eat.updateOne('eaten', 1, req.params.id, (data) => res.redirect('/'));
});
router.delete('/eats/:id', (req, res) => {
    eat.deleteOne(req.params.id, (data) => res.redirect('/'));
});

// Read Routes
router.post('/reads', (req, res) => {
    read.insertOne(req.body.book_name, (data) => res.redirect('/'));
});
router.put('/reads/:id', (req, res) => {
    read.updateOne('readed', 1, req.params.id, (data) => res.redirect('/'));
});
router.delete('/reads/:id', (req, res) => {
    read.deleteOne(req.params.id, (data) => res.redirect('/'));
});

// Watch Routes
router.post('/watches', (req, res) => {
    watch.insertOne(req.body.movie_name, (data) => res.redirect('/'));
});
router.put('/watches/:id', (req, res) => {
    watch.updateOne('watched', 1, req.params.id, (data) => res.redirect('/'));
});
router.delete('/watches/:id', (req, res) => {
    watch.deleteOne(req.params.id, (data) => res.redirect('/'));
});

// catch-all for incorrect get requests
router.get('*', (req, res) => {
    res.send('404')
});

module.exports = router;