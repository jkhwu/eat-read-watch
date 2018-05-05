// =============== SETUP ===============
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// Requires
const router = require('./routes.js');

// Create an instance of the express app.
const app = express();

// Set the port of our application
var PORT = process.env.PORT || 1337;

// Body parsing middleware for req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// =============== ROUTES ================
const routes = require('routes')(express.router);
app.use(routes);

// Start server to listen to client requests.
app.listen(PORT, (stuff) => console.log("Server listening on: http://localhost:" + PORT));