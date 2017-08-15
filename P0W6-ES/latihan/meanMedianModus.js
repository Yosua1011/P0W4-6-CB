// SOAL 1

function calculateMean(arr){
	len = arr.length;
	var a = 0;
	for (i=0; i < len; i++){
		a += arr[i];
	}
	return a/len;
}

var b = [8, 9, 8, 7, 7];
console.log(calculateMean(b))

// SOAL 2

function calculateMedian(arr){				
	len = arr.length;

	if (len%2 !== 0){
		return arr[((len-1)/2)];
	}else{
		return (arr[(len/2)-1]+arr[(len/2)])/2;

	}
}

var arr = [1, 2, 5, 3, 4, 8];
console.log(calculateMedian(arr));

// SOAL 3
//Untuk menentukan modus

function mode(arr) {
    var mode = 0;
    var count2 = 0;
    for(i=0; i<arr.length; i++) {
        var count = 0;
        for(j=0; j<arr.length; j++) {
            if(arr[i] === arr[j] && j!=i) {
                count ++;
            }
            if (count>count2) {
                mode = arr[i];
                count2 = count;
                count = 0
            }
        }
    }
    if (count2===0) {
        return -1;
    }
    return mode;
}
// var mode = function mode(arr) {
//     return arr.reduce(function(current, item) {
//         var val = current.numMapping[item] = (current.numMapping[item] || 0) + 1;
//         if (val > current.greatestFreq) {
//             current.greatestFreq = val;
//             current.mode = item;
//         }
//         return current;
//     }, {mode: null, greatestFreq: -Infinity, numMapping: {}}, arr).mode;
// };
console.log(mode([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6]));