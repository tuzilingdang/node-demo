var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function (socket) {
	var date = strftime('%F %R', new Date());
	// socket.write(date);
	socket.end(date); 
});

server.listen(port);