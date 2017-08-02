/**
Coderbyte Challenge Title: Longest Word
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function LongestWord(sen) 
take the sen parameter being passed and return the largest word in 
the string. If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

Sample Test Cases
Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love"

Hint
It might be easier to first convert the string into an array of words, 
and then loop through the array searching for the word with the most characters.

Main theme: cuma perlu ngereplace karakter selain huruf dengan string kosong lalu
sen di split berdasarkan spasi. Setelah itu silahkan di sort secara descending dan
pakai shift function untuk ngeluarin elemen pertama dari sen yang sudah menjadi
array

Solution:
1. Inisialisasi var arr yang berisi sen dengan fungsi replace
untuk mengganti karakter selain huruf a-z baik huruf besar maupun huruf kecil
dengan string kosong lalu sen sendiri di split berdasarkan spasi
2. Var arr di sort descending
3. arr di kenakan fungsi shift untuk memunculkan elemen pertama dari
arr sendiri yaitu kata dengan jumlah huruf terbanyak 
**/

function LongestWord(sen) { 
    
    var arr = sen.replace(/[^a-zA-Z ]/g,"").split(" ");
  
    arr.sort(function(a,b) { return b.length - a.length } );
    return arr.shift();

}
   
// keep this function call here 
LongestWord(readline());