//npm package requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//extended true is essential to prevent the answers array from becoming inaccessible through parsing weirdness
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import our routing options
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//start server listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
