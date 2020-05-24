// Dependencies
var express = require("express");
// Require models
var db = require("./models");

// Sets up Express
var app = express();
var PORT = process.env.PORT || 8080;

// Test DB connection
// sequelize.authenticate()
//     .then(() => console.log('Successfully connected to database.'))
//     .catch(err => console.log(err))

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Sync models and turn on server
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on http://localhost:" + PORT);
    });
});