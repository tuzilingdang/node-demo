
let readDir = require('./readdir.js');

let folder = process.argv[2];
let ext = process.argv[3];

readDir(folder, ext, function(err, fileList) {
	if(err)  return console.log(err);

	fileList.forEach(function(file){
		console.log(file);
	});
});


