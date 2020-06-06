const path = require('path');

module.exports = function (app) {
    app.get'../public/notes.html'(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html"));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

}