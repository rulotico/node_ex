	var fs = require('fs');
	str=fs.readFile(process.argv[2],'utf8',callback);
	
	
	
	

	function callback(err, str){

		if (err) {
			console.log("ya la cagaste");
		} else{
			var array_str= str.split("\n");
			console.log(array_str.length - 1);
		};


	}




