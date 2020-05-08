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
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

app.get("/notes", function(req, res) {
    // Routes user to the notes.html page
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  