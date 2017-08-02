/**
Coderbyte Challenge Title: Vowel Count
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function VowelCount(str) 
take the str string parameter being passed and return the number 
of vowels the string contains (ie. "All cows eat grass and moo" 
would return 8). Do not count y as a vowel for this challenge. 

Sample Test Cases
Input:"hello"
Output:2

Input:"coderbyte"
Output:3

Hint
A simple loop through the string while maintaining a count of vowels 
should work. You can also try and write a simple regular expression 
to get a list of all the vowels from the string and then return the 
length of this list.

Main theme: ada gunanya juga pakai match tapi di modif dikit biar bisa
langsung ngincer huruf vokal saja

Solution:
1. Inisialisasi var patt sebagai object regular expression yang berisi huruf vokal
dengan status pencarian secara global dan insensitive case alias mau huruf besar
mau huruf kecil tetap kena pencarian huruf vokal
2. Inisialisasi var arr sebagai tukang pencari huruf vokal dengan regex match dan 
sebagai penampung juga
3. Jika arr === null alias hasil pencarian match tidak ada yang cocok amak return 0
4. Jika ditemukan maka return length arr yang berarti jumlah huruf vokal yang ditemukan 
**/

function VowelCount(str) { 

  var patt = /[aeiou]/gi;
  
  var arr = str.match(patt);
  
  if (arr === null) {
    return 0;
  }
  else {
    return arr.length; 
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());

// Cara cepet cuma 1 line doang
function VowelCount(str) { 
    return str.match(/[AEIOUaeiou]/g).length;
}
   
// keep this function call here 
VowelCount(readline());