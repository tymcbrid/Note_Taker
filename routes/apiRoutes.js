const fs = require("fs");
const path = require("path");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// This data source holds the notes
// ===============================================================================
const noteDB = require("../db/db.json");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

// Reads db.json file and returns all saved notes as JSON
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
})


// Receives new note to save on the request body, adds it to db.json, and then returns new note to the client
app.post("/api/notes", function(req, res) {
  noteDB.push(req.body);
  assignID(noteDB);

fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jsonData, null, 2), (err) => {
    if (err) throw err
});
  res.json(req.body);
})

// Receives query parameter containing the ID of a note to delete by reading all notes in the db.json, removing the note with specified ID, and then re-writing the other notes to db.json
app.delete("/api/notes/:id", function(req, res) {

})


    
}


function assignID(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].id = i + 1;
    }
};
// Receives query parameter containing the ID of a note to retrieve, reads db.json file and returns the note
// app.get("/api/notes/:id", function(req, res) {
//   var chosen = req.params.id;
//   console.log(chosen);
//   // for (var i = 0; i < notes.length; i++){
//   //   if (chosen === notes[i].routeName){
//   //     return res.json(notes[i]);
//   //   }
//   // }
//   // return res.json(false);
// })