// ===============================================================================
// DEPENDENCIES - We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// Allows this module to be exported to the rest of the application
module.exports = function(app) {


// ===============================================================================
// ROUTING
// ===============================================================================

app.get("/notes", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found, default to index
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

}