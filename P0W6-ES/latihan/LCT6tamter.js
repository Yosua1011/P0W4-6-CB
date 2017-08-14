var loop = 0;
function tambahTerus(num) {
	var arr = num.toString().split('').map(Number)
	if (arr.length === 1) {
		return loop;
	} else {
		var total = arr.reduce(function(a,b) {return a+b})
		console.log('Ini totalnya: ' + total);
		loop += 1;
		return tambahTerus(total);
	}
}

var num = 1234;
console.log(tambahTerus(num));