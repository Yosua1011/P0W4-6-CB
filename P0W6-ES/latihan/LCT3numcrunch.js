function numberCruncher(arr) {
	arr.unshift(0);
	arr.push(0);
	var arrkos = [];
	for(var i=1; i<arr.length-1; i++) {
		var total = arr[i]+arr[i-1]+arr[i+1];
		arrkos.push(total);
	}
	return arrkos;
}

var arr = [2,5,1,3];
console.log(numberCruncher(arr));