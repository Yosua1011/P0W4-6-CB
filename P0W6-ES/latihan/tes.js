// function coba(str) {
// 	// var temp = []
// 	var unik = str.filter(function(value,index) {
// 		return str.indexOf(value) == index
// 	})
// 	return unik;
// }

// var str = ['A', 'A', 'B', 'B'];
// console.log(coba(str));

/**
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan angka 2,3,4,6,7, atau 8
yang ditulis dengan kata dalam bahasa Inggris, dan diacak. Seluruh karakter di kode tersebut apabila disusun dengan baik, 
akan menghasilkan beberapa kata berupa angka dalam bahasa Inggris.
District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka, mereka tidak memasukkan angka 1, 5, dan 9.
Berikut ini adalah bahasa Inggris untuk angka yang digunakan: 
TWO -> 2 'W'
THREE -> 3 'R'
FOUR -> 4 'U'
SIX -> 6 'X'
SEVEN -> 7 'V'
EIGHT -> 8 'G'
Contoh Kode 1:
WTWTHROETEO. Apabila diacak mendapatkan kombinasi TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!
**/
function decoder(code) {
	var codesplit = code.split('');
	console.log(codesplit);
	var words = ['TWO', 'THREE', 'FOUR', 'SIX', 'SEVEN', 'EIGHT'];
	var tempArr = [];
	for (var i=0; i<codesplit.length; i++) {
		if (codesplit[i] === 'W') {
			tempArr.push(words[0]);
		} else if(codesplit[i] === 'R' && codesplit.includes('T')) {
			tempArr.push(words[1]);
		} else if(codesplit[i] === 'F') {
			tempArr.push(words[2]);
		} else if(codesplit[i] === 'X') {
			tempArr.push(words[3]);
		} else if(codesplit[i] === 'V') {
			tempArr.push(words[4]);
		} else if(codesplit[i] === 'G') {
			tempArr.push(words[5]);
		}
	}
		
// 	// for (var i=0; i<codesplit.length; i++) {
// 	// 	if (codesplit[i] === 'W') {
// 	// 		tempArr.push(2);
// 	// 	} else if(codesplit[i] === 'R' && codesplit.includes('T')) {
// 	// 		tempArr.push(3);
// 	// 	} else if(codesplit[i] === 'F') {
// 	// 		tempArr.push(4);
// 	// 	} else if(codesplit[i] === 'X') {
// 	// 		tempArr.push(6);
// 	// 	} else if(codesplit[i] === 'V') {
// 	// 		tempArr.push(7);
// 	// 	} else if(codesplit[i] === 'G') {
// 	// 		tempArr.push(8);
// 	// 	}
// 	// }

	console.log(tempArr);
	var tempNum = [];
	for (var j=0; j<tempArr.length; j++) {
		if (tempArr[j] === 'TWO') {
			tempNum.push(2);
		} else if (tempArr[j] === 'THREE') {
			tempNum.push(3);
		} else if (tempArr[j] === 'FOUR') {
			tempNum.push(4);
		} else if (tempArr[j] === 'SIX') {
			tempNum.push(6);
		} else if (tempArr[j] === 'SEVEN') {
			tempNum.push(7);
		} else if (tempArr[j] === 'EIGHT') {
			tempNum.push(8);
		} else {

		}
	}
	console.log(tempNum);

	var total = tempNum.reduce(function(a,b){return a+b});
	// var total = tempArr.reduce(function(a,b){return a+b});
	return 'Targetnya District ' + total;
}


// Masih ada bug
// function decoder(str) {
//     var arr =  str.split('');
//     var numstring = [];
//     for (i = 0; i < arr.length; i++) {
//         switch (arr[i]) {
//             case 'W' : numstring.push(2); break;
//             case 'R' && 'H' : numstring.push(3); break;
//             case 'U' : numstring.push(4); break;
//             case 'X' : numstring.push(6); break;
//             case 'V' : numstring.push(7); break;
//             case 'G' : numstring.push(8); break;
//         }
//     }
//     var total = numstring.reduce((a, b) =>{return a+b;});
//     return 'Target District '+total;
// }

console.log('tes1')
var code = 'WTWTHROETEO';
console.log(decoder(code));
console.log('tes2')
var code = 'HSEVTEEING';
console.log(decoder(code));
console.log('tes3')
var code = 'FNEXSIVUSEOR';
console.log(decoder(code));
console.log('tes4')
var code = 'WTO';
console.log(decoder(code));
console.log('tes5')
var code = 'THREEEIGHTTWO';
console.log(decoder(code));