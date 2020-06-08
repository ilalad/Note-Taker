const noteJSON = require("./db/db.json");

// get all notes JSON

module.exports = app => {
    app.get('/api/notes', (req, res) => {
        return res.json(noteJSON);
    });

    app.post('/api/notes', (req, res) => {
        const lastId = noteJSON.length ? Math.max(...(noteJSON.map(note => note.id))) : 0;
        const id = lastId + 1;
        noteJSON.push({ id, ...req.body });
        res.json(noteJSON.slice(-1));
    });



    app.delete('/api/notes/:id', (req, res) => {
        let note = noteJSON.find(({ id }) => id === JSON.parse(req.params.id));
        noteJSON.splice(noteJSON.indexOf(note), 1);
        res.end("Note deleted");
    });

}
