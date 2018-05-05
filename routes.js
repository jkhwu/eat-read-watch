const EatController = require('./app/eat/eat_controller.js');
const EatView = require('./app/eat/eat_view.js');

module.exports = (router) => {
    router.get('/', (req, res) => {
        EatController.index()
            // .then((data) => {
            //     res.render('index', data)
            // });
    });
    router.get('/eat/:id', (req, res) => {
        CatController.read(req.params.id)
            .then((data) => {
                res.render('cat_profile', data)
            });
    });
}

// =============== ROUTES ================

// Read: main route grabs everything from SQL database
app.get("/", function(req, res) {
    connection.query("SELECT * FROM movies", function(err, result) {
        if (err) throw err;
        res.render("index", { result });
    });
});

// Create: Add a movie with form
app.post("/movies", function(req, res) {
    var newMovie = req.body.newMovie.trim();
    console.log('You sent: ' + newMovie); // test
    connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.newMovie], function(err, result) {
        if (err) throw err;
        res.send("Your Movie ID: " + result.insertId);
    });
});

// Update
app.put("/movies/:id", function(req, res) {
    var newWish = req.body.newWish.trim();
    console.log('You sent: ' + newWish); // test
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.newWish], function(err, result) {
        if (err) throw err;
        res.redirect("/");
    });
});

// Delete
app.delete("/movies/:id", function(req, res) {
    var newWish = req.body.newWish.trim();
    console.log('You sent: ' + newWish); // test
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.newWish], function(err, result) {
        if (err) throw err;
        res.redirect("/");
    });
});