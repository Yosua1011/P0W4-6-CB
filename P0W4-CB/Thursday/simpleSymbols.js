/**
Coderbyte Challenge Title: Simple Symbols
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function SimpleSymbols(str) 
take the str parameter being passed and determine if it is an acceptable 
sequence by either returning the string true or false. The str parameter 
will be composed of + and = symbols with several letters between them 
(ie. ++d+===+c++==a) and for the string to be true each letter must be 
surrounded by a + symbol. So the string to the left would be false. 
The string will not be empty and will have at least one letter. 

Sample Test Cases
Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"

Hint
A simple loop through the string and checking if each letter is surrounded 
by a + symbol should work. You can also try writing a simple regular 
expression to solve this challenge.

Main theme: jadi ada method namanya trim yang bisa ngapusin spasi gak kepake atau
istilahnya whitepace lalu gunakan replace utk ganti karakter selain huruf dengan string
kosong. Selanjutnya kayak biasa tuh kalimat di split berdasarkan spasi lalu di sort
berdasarkan length tiap karakter array tersebut

Solution:
1. Jadi awali dengan menginisialisasi 3 kondisi, yaitu:
- Kondisi 1: Jika isi str tidak terdapat a-z secara insensitive case
- Kondisi 2: Jika indeks sebelum huruf a-z secara insensitive case tidak terdapat tanga +
- Kondisi 3: Jika indeks setelah huruf a-z secara insensitive case tidak terdapat tanga +
2. Gunakan kondisional if untuk menghasilkan true atau false dengan menggunakan fungsi test.
Fungsi test digunakan untuk mengetes apakah kondisi 1/2/3 terdapat pada str atau tidak
**/

function SimpleSymbols(str) {
  var con1 = /^[a-zA-Z]/;
  var con2 = /[^+][a-zA-Z]/;
  var con3 = /[a-zA-Z][^+]/;
  var output;
  if (con1.test(str)) {
    output = "false";
  } else if (con2.test(str)) {
    output = "false";
  } else if (con3.test(str)) {
    output = "false";
  } else {
    output = "true";
  }
  return output;        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());