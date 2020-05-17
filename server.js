// ==============================================================================
// Dependencies
// ==============================================================================
var express = require("express");
// ==============================================================================
// Express configuration
// ==============================================================================

// Tells node we are creating an express server
var app = express();

// Sets an initial port, will be used later in listener
var PORT = process.env.PORT || 3000;

// Enables Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for serving static resources
app.use(express.static('public'))


// ==============================================================================
// Router - points our server to a series of route files
// ==============================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// ==============================================================================
// Listener - Sets up express to listen on the specified port under the URL localhost:PORT
// ==============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  