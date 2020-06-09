// DEPENDENCIES
const express = require("express");

// express server
const app = express();

const PORT = process.env.PORT || 8080;

// middleware to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// route handling and parses our instance of express, app

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);


// LISTENER
app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});