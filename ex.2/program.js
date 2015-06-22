var suma = 0;



for (var i = 2; i < process.argv.length; i++) {
	var n = Number(process.argv[i]);
	suma += n;
};

console.log(suma);