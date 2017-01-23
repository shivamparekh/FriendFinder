//packages

var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

// create the app

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/app/public'));

// use bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// routes

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// listening

app.listen(PORT, function() {
	console.log("app listening on port", PORT);
});