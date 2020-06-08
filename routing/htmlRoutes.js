const path = require("path");

// get note form
module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    //get home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}