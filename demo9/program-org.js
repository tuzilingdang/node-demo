var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(response){
	response.setEncoding('utf8');
	// console.log(response.statusCode);
	response.pipe(bl(function (err, data) {
		if(err) return console.error(err);
		console.log(data.toString());
	}));

	getUrl2();
}).on('error', console.error);

function getUrl2 (){
	http.get(url2, function(response){
		response.setEncoding('utf8');
		// console.log(response.statusCode);
		response.pipe(bl(function (err, data) {
			if(err) return console.error(err);
			console.log(data.toString());
		}));

		getUrl3();
	}).on('error', console.error);
}


function getUrl3 (){
	http.get(url3, function(response){
		response.setEncoding('utf8');
		// console.log(response.statusCode);
		response.pipe(bl(function (err, data) {
			if(err) return console.error(err);
			console.log(data.toString());
		}));
	}).on('error', console.error);
}

