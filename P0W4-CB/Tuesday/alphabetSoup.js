/**
Coderbyte Challenge Title: Alphabet Soup
Coderbyte Challenge Level: Easy

Soal:
Using the JavaScript language, have the function AlphabetSoup(str) 
take the str string parameter being passed and return the string with |
the letters in alphabetical order (ie. hello becomes ehllo). Assume 
numbers and punctuation symbols will not be included in the string. 

Sample Test Cases
Input:"coderbyte"
Output:"bcdeeorty"

Input:"hooplah"
Output:"ahhloop"

Main Theme: Sort function bisa juga loh dipakai untuk ngurutin huruf

Solution:
1. Karena str itu string dan string itu array maka kita split terlebih dahulu
setiap elemen/huruf yang ada di str
2. Dengan fungsi sort, mari kita urutkan setiap huruf yang sudah di split sebelumnya
Default funngsi sort adalah mengurutkan secara ascending
3. Langkah terakhir adalah menggabungkan setiap elemen/huruf dari str dengan fungsi join
**/

function AlphabetSoup(str) { 

  // code goes here  
  return str.split('').sort().join(''); 
         
}
   
// keep this function call here 
AlphabetSoup(readline());