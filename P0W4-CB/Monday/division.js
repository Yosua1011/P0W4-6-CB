/**
Coderbyte Challenge Title: Division
Coderbyte Challenge Level: Medium

Soal: 
Using the JavaScript language, have the function Division(num1,num2) 
take both parameters being passed and return the Greatest Common Factor. 
That is, return the greatest number that evenly goes into both numbers 
with no remainder. For example: 12 and 16 both are divisible by 1, 2, 
and 4 so the output should be 4. The range for both parameters will be 
from 1 to 10^3. 

Main Theme: Baca ulang materi Faktor Perkalian Terbesar pas belajar di SD

Solution:
1. Cari angka terbesar dan angka terkecil dari num1 dan num2 simpan di variabel
bigNum dan smallNum
2. Gunakan looping untuk menjalankan i. i adalah angka yang digunakan sebagai penyebut
(Contoh: 36 : 4 = 9 maka 36 adalah pembilang dan 4 adalah penyebut). Setiap kali looping
dijalankan maka nilai i akan disimpan di variabel maxi
3. Looping akan berhenti jika variabel maxi sama dengan atau kurang dari variabel smallNum
4. Variabel maxi akan menjadi Faktor Perkalian Terbesar antara num1 dan num2
**/


function Division(num1,num2) { 
    var bigNum = Math.max(num1, num2);
    var smallNum = Math.min(num1, num2);
    
    for (i=0; i <= smallNum; i++) {
        if (bigNum%i === 0 && smallNum%i === 0) {
            var maxi = i;
        }
    }
    return maxi;
}

   
// keep this function call here 
Division(readline());
