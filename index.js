var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/client', express.static(__dirname + '/client'));
var clients = {};
var shortid = require('shortid');

app.get('/api/next', function(req, res){
	var id = req.body._id;
	clients[id].emit('next');
	res.status(200).send();
});

app.get('/api/prev', function(req, res){
	var id = req.body._id;
	clients[id].emit('previous');
	res.status(200).send();
});

app.get('/api/close', function(req, res){
	var id = req.body._id;
	delete clients[id];
	res.status(200).send();
});

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

var server = app.listen(8000, function () {
  console.log("Started...");
});

var io = require('socket.io')(server);

io.on('connection', function(socket){
	var _id = shortid.generate();
	clients[_id] = socket;
	socket.emit('id', {id: _id});
	setTimeout(function(){
		delete clients[_id];
	}, 1000*60*60*3);
});