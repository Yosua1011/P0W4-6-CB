/**
1. Number Cruncher
Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
berupa angka, dan mengembalikan array baru yang merupakan hasil penambahan angka di
index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
angka di kiri atau kanan, maka dianggap sebagai 0.
Ex:
Input: [ 2 , 5 , 1 , 3 ]
Proses: [ 0 + 2 + 5 , 2 + 5 + 1, 5 + 1 + 3, 1 + 3 + 0 ]
Output: [ 7, 8, 9, 4 ]
**/

function numberCruncher(arr) {
	arr.unshift(0);
	arr.push(0);
	var newArr = [];
	// console.log(arr.length-1);
	for (i=1; i<arr.length-1; i++) {
		newArr.push(arr[i] + arr[i-1] + arr[i+1]);
		
	}
	return newArr;
}

var input = [2,5,1,3];
console.log(numberCruncher(input));