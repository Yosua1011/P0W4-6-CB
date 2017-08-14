function initialGrouping(names) {
	var result = []
	var hurufdepan = [];
	for(var i=0; i<names.length; i++) {
		var awalkata = names[i][0];
		if(hurufdepan.indexOf(awalkata) === -1) {
			hurufdepan.push(awalkata);
		}
	}
	// return hurufdepan;
	for (var j=0; j<hurufdepan.length; j++){
		var tampungperkata = [];
		for (var k=0; k<names.length; k++) {
			if (hurufdepan[j] === names[k][0]) {
				tampungperkata.push(names[k]);
			}
		}
		result.push(tampungperkata);
	}
	return result;
}

var names = ['Budi', 'Bani', 'Yonathan', 'Yosua', 'Hary', 'Burhan'];
console.log(initialGrouping(names));