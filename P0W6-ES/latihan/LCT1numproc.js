function findMax(arrNum) {
	// arrNum.sort(function(a,b){return a-b})
	// return arrNum[arrNum.length-1];
	return Math.max(...arrNum); //spread operator syntax
}

function findMin(arrNum) {
	return Math.min(...arrNum); //spread operator syntax
}

function findOdds(arrNum) {
	let ganjil =  arrNum.filter(isiArrNum => {
		return isiArrNum % 2 === 1;
	});
		return ganjil.join('-')
}

function findEvens(arrNum) {
	let genap = arrNum.filter(isiArrNum => {
		return isiArrNum % 2 === 0;
	});
	return genap.join('-')
}

function findMean(arrNum) {
	var total = arrNum.reduce(function(a,b){return a+b});
	var len = arrNum.length;
	return Math.floor(total/len);
}

function numberProcessing(arrNum) {
	var maximum = findMax(arrNum);
	var minimum = findMin(arrNum);
	var odds = findOdds(arrNum);
	var even = findEvens(arrNum);
	var mean = findMean(arrNum);
	return 'Max :' + maximum + ' Min :' + minimum + ' Evens: ' + even + ' Odds: ' + odds + ' Mean: ' + mean;
}

var arrNum = [1,2,3,4,6,7,8,9,10,11,12,13,14,15];
console.log(numberProcessing(arrNum));
