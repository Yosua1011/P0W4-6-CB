function removeDash(str) {
    return str.replace(/-/g, ' ');
}

function capitalizeString(str) {
    var arr = str.split(' ');
    // console.log(arr.slice(1));
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

function transformTextToNumber(str) {
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

function stringManipulator(str) {
    var hapusDash = removeDash(str);
    var kapitalin = capitalizeString(hapusDash);
    var gantisimbol = transformTextToNumber(kapitalin);
    return gantisimbol;
}

var str = 'hello-world-lala';
console.log(stringManipulator(str));