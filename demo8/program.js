var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(response){
	response.setEncoding('utf8');
	// console.log(response.statusCode);
	response.pipe(bl(function (err, data) {
		if(err) return console.error(err);
		console.log(data.toString().length);
		console.log(data.toString());
	}));
}).on('error', console.error);