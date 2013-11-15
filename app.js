var http = require('http');
var express = require('express');
var stylus = require('stylus');
var seraph = require('seraph');
var nib = require('nib');

var app = express();
var server = http.createServer(app);
var db = seraph('http://localhost:7474');

app.db = db;
app.server = server;

app.set('view engine', 'jade');
app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: function(str, path) {
    return stylus(str).set('filename', path).use(nib);
  }
}));
app.use(express.bodyParser())

require('./models')(db);
require('./routes')(app);

server.listen(2020);
