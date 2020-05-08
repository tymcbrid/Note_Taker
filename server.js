// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Express App Setup
var app = express();
var PORT = 3000;

// Enables Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page

app.get("/notes", function(req, res) {
    // Routes user to the notes.html page
    console.log(path.join(__dirname, "/public/notes.html"))
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

// Reads db.json file and returns all saved notes as JSON
app.get("/api/notes", function(req, res) {
    return res.json(notes)
})

// Receives query parameter containing the ID of a note to retrieve, reads db.json file and returns the note
app.get("/api/notes/:id", function(req, res) {
})

// Receives new note to save on the request body, adds it to db.json, and then returns new note to the client
app.post("/api/notes", function(req, res) {

})

// Receives query parameter containing the ID of a note to delete by reading all notes in the db.json, removing the note with specified ID, and then re-writing the other notes to db.json
app.delete("/api/notes/:id", function(req, res) {

})

// Sets up Express to listen on the specified port under the URL localhost:PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  