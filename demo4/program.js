
let readDir = require('./readdir.js');
let folder = process.argv[2];
let ext = process.argv[3];

readDir(folder,  ext, function(err, files) {
	if(err)  return console.log(err);

	files.forEach(function(file){
		console.log(file);
	});
});


