var express = require("express");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// express server

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());






app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});