const fs = require('fs');
const idNotes = require("./Develop/db/idJSON.json")
const dbNotes = require("./Develop/db/db.json");

function notesID() {
    fs.writeFileSync("./Develop/db/idJSON.json", JSON.stringify(idNotes));
}

function notes() {
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(dbNotes));
}

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(db);
    });

    app.post("/api/notes", (req, res) => {
        const newReq = req.body;
        id.noteID += 1;
        newReq.id = id.noteID;
        db.push(newReq);
        res.json(newReq);
        notesID()
        notes();
        ;
    });

    app.delete("/api/notes/:id", (req, res) => {
        let matchedNote = false;
        db.forEach((element, index) => {
            if(element.id == req.params.id) {
                matchedNote = true;
                db.splice(index,1);
                saveNotes();
            }
        });
        
        if(!matchedNote) {
            res.json({ ok: false });
        }
        else {
            res.json({ ok: true });
        }
        
    });
};