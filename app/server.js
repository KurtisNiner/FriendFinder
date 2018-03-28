//declare what is required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express server
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("This application is listening on PORT: " + PORT);
});
