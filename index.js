var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var clients = {};
var shortid = require('shortid');

// Add headers
app.use(function (req, res, next) {
	
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/client', express.static(__dirname + '/client'));
 
app.post('/api/next', function(req, res){
	var id = req.body.id;
	//console.log(req.body);
	//console.log(Object.keys(clients));
	clients[id].emit('next');
	res.status(200).send();
});

app.post('/api/prev', function(req, res){
	var id = req.body.id;
	clients[id].emit('previous');
	res.status(200).send();
});

app.post('/api/close', function(req, res){
	var id = req.body.id;
	delete clients[id];
	res.status(200).send();
});

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

var server = require('http').createServer(app);
server.listen(process.env.PORT, process.env.IP, function () {
  console.log('Started...');
});
// var server = app.listen(process.env.IP, function () {
//   console.log("Started...");
// });

var io = require('socket.io')(server);

io.on('connection', function(socket){
	var _id = shortid.generate() + '';
	clients[_id] = socket;
	socket.emit('id', {id: _id});
	setTimeout(function(){
		delete clients[_id];
	}, 1000*60*60*3);
});