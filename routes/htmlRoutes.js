// Includes path to get the correct file path for the html
var path = require("path");

// Allows this module to be exported to the rest of the application
module.exports = function(app) {


// Routes user to the notes.html page
app.get("/notes", function(req, res) {
   res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Basic route that sends the user first to the AJAX Page
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

}