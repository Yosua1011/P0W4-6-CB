/**
Coderbyte Challenge Title: Swap Case
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function SwapCase(str) 
take the str parameter and swap the case of each character. 
For example: if str is "Hello World" the output should be hELLO wORLD. 
Let numbers and symbols stay the way they are. 

Sample Test Cases
Input:"Hello-LOL"
Output:"hELLO-lol"

Input:"Sup DUDE!!?"
Output:"sUP dude!!?"

Main Theme: Pintar-pintarlah menggunakan fungsi di dalam loop
untuk melakukan komparasi tiap elemen dengan pembandingnya

Solution:
1. Parameter str di split terlebih dahulu dengan tujuan agar
setiap elemen str dapat dibandingkan dengan pembandingnya
masing-masing
2. Jalankan loop sepanjang elemen str
3. Jika elemen str sama dengan elemen tersebut yang di kapitalisasi
maka elemen tersebut di jadikan huruf kecil
4. Jika elemen str sama dengan elemen tersebut dalam format huruf kecil
maka elemen tersebut di kapitalisasi
5. Gabungkan seluruh elemen str yang sudah di konversi dengan join
**/

function SwapCase(str) { 
arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
     arr[i] = arr[i].toLowerCase(); 
    }
    else if (arr[i] == arr[i].toLowerCase()) {
     arr[i] = arr[i].toUpperCase(); 
    }
  }
    str = arr.join("");  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());