/**
Coderbyte Challenge Title: Letter Changes
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function LetterChanges(str) 
take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Sample Test Cases
Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!"

Hint
Changing a character to the next one that appears in the alphabet can easily be achieved by using the letters character code (ASCII).

Main theme: Bikin library huruf a-z, bikin looping dengan conditional utk merubah huruf
gunakan regular expression untuk merubah huruf vokal

Solution:
1. Inisialisasi variabel alphabet sebagai array tipe string berisih huruf a sampai z
2. Inisialisasi variabel newStr sebagai variabel penampung elemen str yang sudah dirubah
3. inisialisasi variabel loc yang nanti akan berfungsi sebagai penunjuk indeks huruf elemen str di array alphabet
4. Jalankan loop dengan i dimulai dari 0 dan akan berhenti ketika i sama dengan str.length, i sendiri increment
5. Assign variabel loc dengan indeks dari elemen str terhadap array alphabet
6. Pada loop tersebut terdapat 3 kondisi sebagai berikut:
- Kondisi 1: Jika loc sama dengan 25 alias huruf z maka newStr akan di isi dengan huruf a. Ingat z akan menjadi a sesuai
perintah soal
- Kondisi 2: Jika loc sama dengan -1 maka newStr akan diisi dengan elemen tersebut tanpa adanya modifikasi. Kondisi
ini sangat berguna untuk karakter selain huruf a-z
- Kondisi 3: newStr akan diisi dengan karakter yang indeksnya loc + 1 sesuai perintah soal yaitu menggeser karakter yang
ditampilkan sebanyak 1 indeks
7. Untuk tahap finalisasi newStr yang sudah berisi huruf-huruf yang bergeser 1 indeks akan menjalani beberapa modifikasi sebagai berikut:
- Gunakan regular expressions untuk mencari huruf vokal secara global
- huruf vokal tersebut akan dikenai function Letter yang akan merubah huruf tersebut menjadi huruf kapital
**/

function LetterChanges(str) { 
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var newStr = '';
    var loc;
    
    for (i=0; i<str.length; i++) {
        loc = alphabet.indexOf(str[i]);
        if (loc === 25) {
            newStr = newStr + 'a';
        } else if (loc === -1) {
            newStr = newStr + str[i];
        } else {
            newStr = newStr + alphabet[loc + 1];
        }
    }
    
    return newStr.replace(/[aieuo]/g, function(letter) {return letter.toUpperCase()});
         
}
   
// keep this function call here 
LetterChanges(readline());