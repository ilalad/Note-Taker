const getNotes = require('../db/db.json');
const saveNote = require('../db/db.json');
const deleteNote = require('../db/db.json');

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        res.json(getNotes);
    });

    app.post('/api/notes', function (req, res) {
        saveNote.push(req.body);
        res.json(true);
    });

    app.delete('/api/notes/:id', function () {
        deleteNote = [];

        console.log();
    })
}