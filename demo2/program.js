
var sum = 0;

process.argv.forEach(function(argv, index){
	if(index > 1) {
		sum += Number(argv);
	}
});

console.log(sum);