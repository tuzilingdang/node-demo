var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var port = process.argv[2];
// var filePath = process.argv[3];

var server = http.createServer(function(req, res){
	if(req.method !== 'POST')
		return res.end('Please use post type to get data. \n');

	var body = '';
	req.on('data', function(chunk) {
		fs.createReadStream(chunk).pipe(map(function(chunk){
			return  chunk.toString().toLocaleUpperCase();
		})).pipe(body);
	});

	req.on('end', function(){
		res.end(body)
	})

	// res.writeHead(200,{'content-type': 'text/plain'});
	// fs.createReadStream(filePath).pipe(map(function(chunk) {
	// 	return chunk.toString().toLocaleUpperCase();
	// })).pipe(res);

});

server.listen(port);