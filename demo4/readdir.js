let fs = require('fs');
let path = require('path');

module.exports = function(folder, ext, callback) {
	fs.readdir(folder, function(err , files) {
		if(err) {
			return callback(err);
		}
		debugger;
		var fileList = [];

		fileList = files.filter(function(file) {
			return path.extname(file) === '.' + ext;
		});
		callback(null, fileList);
	})

}