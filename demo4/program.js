
let readDir = require('./readdir.js');

let folder = process.argv[2];
let ext = '.' + process.argv[3];

readDir(folder,  ext, function(err, file) {
	if(err)  return console.log(err);

	console.log(file);
});


