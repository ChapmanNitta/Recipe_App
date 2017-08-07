var express = require('express');
var app = express();
var request = require('request');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var food2fork = require('./config');

// Spins up an express webserver
app.listen(port, function() {
  console.log('Node webserver listening at localhost:' + port);
})

// Monitors for static files (html, css, js, etc.)
app.use(express.static(__dirname + '/public'));

// Sets EJS as the template engine and the 'Views' folder as the source of the views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');

// Middleware that allows body content to be parsed when making POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.get('/', function(req, res) {
  res.render('index')
})

app.get('*', function(req, res) {
  res.render('404')
})
