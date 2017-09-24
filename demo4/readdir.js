let fs = require('fs');
let path = require('path');

module.exports = function(folder, ext, callback) {
	// var args = Array.prototype.slice.call(arguments);
	// let folder = args[0];
	// let ext = args[1];
	// let callback = args[2];

	fs.readdir(folder, function(err , files) {
		if(err) {
			return callback(err);
		}
		debugger;
		
		for(let file of files) {
			debugger;
			if(path.extname(file) === ext) {
				callback.call(null, file);
			}
		}
	})

}