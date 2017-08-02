/**
Coderbyte Challenge Title: Prime Time
Coderbyte Challenge Level: Medium

Soal:
Have the function PrimeTime(num) take the num parameter being passed 
and return the string true if the parameter is a prime number, 
otherwise return the string false. The range will be between 1 and 2^16. 

Main Theme: Cari tahu bilangan prima dimulai dari angka berapa

Solution:
1. Karena bilangan prima dimulai dari angka 2 maka bilangan yang kurang
dari 2 akan return false
2. Jika num adalah 2 maka akan langsung return true
3. Gunakan looping untuk mengisi nilai i yang akan menjadi penyebut
4. Jika nilai i menyebabkan hasil modulus sama dengan 0 maka langsung return
false karena num bukan bilangan prima
5. Jika tidak ada satupun nilai i yang di loop dapat menghasilkan hasil modulus
bernilai 0 maka num adalah bilangan prima

Note: Bilangan Prima adalah bilangan asli yang lebih besar dari angka 1, 
yang faktor pembaginya adalah 1 dan bilangan itu sendiri. 
2 dan 3 adalah bilangan prima
**/

function PrimeTime(num) {
    if(num<2) {
        return false
    } else if (num === 2) {
        return true
    }
    
    for (i=2; i < num; i++) {
        if(num%i === 0) {
            return false
        }
    }
    return true
    
}

// keep this function call here 
PrimeTime(readline());