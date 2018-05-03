// =============== SETUP ===============
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cmd = require('node-cmd');
// Requires
const router = require('./controllers/burger_controllers.js');
// Create an instance of the express app.
const app = express();
// Set the port of our application
var PORT = process.env.PORT || 1337;
// get us that sweet schema
cmd.run('mysql -u root < schema.sql');

// Body parsing middleware for req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start server to listen to client requests.
app.listen(PORT, (stuff) => console.log("Server listening on: http://localhost:" + PORT));