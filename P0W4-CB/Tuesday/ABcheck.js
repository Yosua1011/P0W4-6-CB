/**
Coderbyte Challenge Title: AB Check
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function ABCheck(str) 
take the str parameter being passed and return the string true 
if the characters a and b are separated by exactly 3 places anywhere 
in the string at least once (ie. "lane borrowed" would result in true 
because there is exactly three characters between a and b). 
Otherwise return the string false. 

Sample Test Cases
Input:"after badly"
Output:"false"

Input:"Laura sobs"
Output:"true"

Solution:
1. Dari hintnya sudah disarankan untuk menggunakan regular expression untuk
mengecek jarak/jummlah karakter di antara karakter a dan b
2. Dalam function di bawah, var patt di inisialisasi untu
diisi dengan pola pattern yang akan dijadikan acuan dalam mengecek apakah
jarak huruf a dan b terisi 3 karakter atau tidak
3. Jadi regular expressionnya jika di artikan dalam Bahasa Indonesia, adalah
sebagai berikut:
Jika jarak antara huruf a dan b atau jarak antara huruf b dan a sebesar 3
karakter maka return true
4. Gunakan fungsi test karena fungsi ini sangat berguna sebagai
yang menjalankan variabel patt yang merupakan regular expression
**/

function ABCheck(str) {
    
    patt = /a...b|b...a/;

  // code goes here  
  return patt.test(str); 
         
}
   
// keep this function call here 
ABCheck(readline());