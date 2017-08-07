/*
HACKTIV8 Live code week 4

Nama: Yosua Tresno Surojo

===============================
Soal Array 3 - Remove Duplicate
===============================

[INSTRUKSI]
Tersedia satu input array yang memiliki angka yang duplikat, Tugas kamu menghapus angka yang duplikat tersebut.

Output: array yang telah di-sorted, semua duplikat dihapus

[CONTOH]

1) [1, 4, 3, 1, 2, 2, 4]	-->	[1, 2, 3, 4]

*/

function hapusDuplikat(arr) {
	// start code here
	var ngurut = arr.sort(function(a,b){return a-b});
	var tampung = [];
	var hasil = [];
	for (i=0; i<ngurut.length; i++) {
  		tampung.push(String(ngurut[i]));
	}
	// console.log(tampung);

	proses = tampung.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
	
    for (j=0; j<proses.length; j++) {
  		hasil.push(Number(proses[j]));
	}
	return(hasil);

}

console.log(hapusDuplikat([1, 4, 3, 1, 2, 2, 4]));	// [1, 2, 3, 4]
console.log(hapusDuplikat([2, 2, 2, 2]));			// [2]
console.log(hapusDuplikat([1, 2, 3]));				// [1, 2, 3]
console.log(hapusDuplikat([6, 5, 3, 2]));			// [2, 3, 5, 6]
