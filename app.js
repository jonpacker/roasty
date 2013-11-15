var http = require('http');
var express = require('express');
var stylus = require('stylus');

var app = express();
var server = http.createServer(app);

app.set('view engine', 'jade');
app.use(stylus.middleware(function() {
  src: __dirname + '/public',
  compile: function(str, path) {
    return stylus(str).set('filename', path).use(nib);
  };
});

app.use(require('./routes'));


server.listen(2020);
