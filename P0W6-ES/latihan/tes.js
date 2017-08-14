function coba(str) {
	var arr = str.split('');
	for(var i=0; i<arr.length; i++) {
		if (arr[i] === 'i' | arr[i] === 'I') {
			arr.splice(i,1,'1');
		} else if (arr[i] === 'e' | arr[i] === 'E') {
			arr.splice(i,1,'3');
		} else if (arr[i] === 's' | arr[i] === 'S') {
			arr.splice(i,1,'5');
		} else if (arr[i] === 'o' | arr[i] === 'O') {
			arr.splice(i,1,'0');
		} else if (arr[i] === 'a' | arr[i] === 'A') {
			arr.splice(i,1,'4');
		}
	}

    return arr.join('');
}

var str = 'Hello World Lalala';
console.log(coba(str));
