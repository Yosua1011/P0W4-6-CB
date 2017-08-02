/**
Coderbyte Challenge Title: Letter Count I
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function LetterCountI(str) 
take the str parameter being passed and return the first word with 
the greatest number of repeated letters. For example: "Today, is the greatest day ever!" 
should return greatest because it has 2 e's (and 2 t's) and it 
comes before ever which also has 2 e's. If there are no words with 
repeating letters return -1. Words will be separated by spaces.

Sample Test Cases
Input:"Hello apple pie"
Output:"Hello"

Input:"No words"
Output:-1

Hint
By creating a hash table (or dictionary) of letters encountered with their counts, 
you can easily determine at the end which character appeared the most times.

Main theme: 

Solution:
1. Inisialisasi variabel-variabel sebagai berikut:
- ctObj untuk array kosong 
- tempWord untuk menampung kata-kata elemen str yang sudah di split
- maxWord untuk menampung kata dengan jumlah pengulangan huruf yang sama terbanyak
- maxCt untuk menampung jumlah huruf yang sama dalam satu kata
2. Selanjutnya, kita harus merubah seluruh huruf pada str menjadi huruf kecil 
dan merubah karakter selain huruf a-z atau A-Z secara global menjadi karakter kosong
lalu setiap kata yang merupakan elemen str di split berdasarkan spasi
3. Jalankan 3 loop, yaitu:
- loop pertama untuk mengassign tempWord dengan karakter indeks yang sedang dijalankan
dan assign ctObj menjadi array kosong
- loop kedua untuk membandingkan setiap huruf pada tempWord dengan huruf sebelahnya. 
Jika mengalami pengulangan maka counter yaitu ctObj bertambah satu
- loop ketiga dengan variabel tambahan yaitu key dalam ctObj. Di dalam loop tersebut
gunakan fungsi hasOwnProperty dengan parameter key. hasOwnProperty berguna untuk 
mengecek apakah key ada di ctObj atau tidak
4. Jika ctObj[key] > dari maxCt yang di inisialisasi dengan nilai 1 untuk karakter yang 
muncul 1 kali maka maxCt di assign dengan ctObj[key]
5. maxWord di assign dengan tempWord
6. Jika tidak ada kata dengan huruf berulang maka return -1
**/

function LetterCountI(str) { 
	var ctObj, tempWord, maxWord, maxCt = 1;
	var arr = str.toLowerCase().replace(/[^a-zA-Z ]/g,'').split(' ');

	for(i = 0; i < arr.length; i ++) {
		tempWord = arr[i];
		ctObj = []

		for(j = 0; j < tempWord.length; j++) {
			ctObj[tempWord[j]] = ctObj[tempWord[j]] || 0;
			ctObj[tempWord[j]]++;
		}

		for (var key in ctObj) {
			if (ctObj.hasOwnProperty(key)) {
				if (ctObj[key] > maxCt) {
					maxCt = ctObj[key];
					maxWord = tempWord;
				}
			}
		}
	}

	if (maxCt === 1) {
		return -1;
	} else {
		return maxWord;
	}
}
   
// keep this function call here 
LetterCountI(readline());