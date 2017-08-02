/**
Coderbyte Challenge Title: Simple Adding
Coderbyte Challenge Level: Easy

Soal:
Using the JavaScript language, have the function SimpleAdding(num) 
add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should 
return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, 
the parameter num will be any number from 1 to 1000. 

Sample Test Cases
Input:12
Output:78

Input:140
Output:9870

Main Theme: Cari tahu fungsi penjumlah sejumlah N angka sepertinya reduce

Solution:
1. Inisialisasi var tot untuk pemnjumlah seluruh angka faktorial num
2. Jalankan loop untuk menambahkan var tot dengan seluruh item faktorial num 
satu per satu. Persyaratan di loopny dimulai dari nilai 1 karena faktorial tidak
memiliki unsur 0 dan stoppernya ketika i sama dengan num karena faktorial
pasti memiliki unsur dengan nilai sama dengan num.
**/

function SimpleAdding(num) { 
    tot = 0;
    for (i=1; i<=num; i++) {
        tot += i;
    }
    return tot;
}
   
// keep this function call here 
SimpleAdding(readline());