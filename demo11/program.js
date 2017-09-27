var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res){
	debugger;
	res.writeHead(200, {'content-type': 'text/plain'});
	fs.createReadStream(filePath).pipe(res);
});

server.listen(port);