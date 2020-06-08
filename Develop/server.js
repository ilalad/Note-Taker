// DEPENDENCIES
const express = require("express");
// const bodyParser = require("body-parser");


// express server
const app = express();
const fs = require("fs");

const PORT = process.env.PORT || 8080;

// middleware to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route handling and parses our instance of express, app and fs

require('./routing/apiRoutes.js')(app, fs);
require('./routing/htmlRoutes.js')(app, fs);


// LISTENER
app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});