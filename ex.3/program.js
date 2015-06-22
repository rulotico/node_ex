var fs = require('fs');

buf=fs.readFileSync(process.argv[2]);

var str = buf.toString();
var array_str= str.split("\n");



console.log(array_str.length - 1);