/**
Coderbyte Challenge Title: Letter Capitalize
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function LetterCapitalize(str) 
take the str parameter being passed and capitalize the first letter 
of each word. Words will be separated by only one space. 

Sample Test Cases
Input:"hello world"
Output:"Hello World"

Input:"i ran there"
Output:"I Ran There"

Hint
There might be a built-in function in your programming language that capitalizes the first letter of each word.

Main theme: Ada gunanya juga pakai charAt untuk ngincer salah satu huruf
dari tiap kata di str

Solution:
1. argument pada parameter str di split berdasarkan spasi
2. Jalankan loop untuk mencari elemen pada hasil split str dengan step sebagai berikut:
- Gunakan function charAt untuk mengincar karakter pertama dari setiap kata yang merupakan
elemen str
- Karakter pertama tersebut di jadikan huruf kapital
- selanjutnya karakter pertama tersebut ditambahkan karakter setelahnya dengan slice tanpa stop
(ingat str sudah menjadi array setelah di split sehingga efek slice hanya akan sampai karakter
terakhir dari elemen array str)
3. Satukan kembali elemen str yang tadi sudah di split dengan join yang di batasi spasi
**/

function LetterCapitalize(str) {
    var arr = str.split(' ');
    for (i=0; i<arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    return arr.join(' ');
}
   
// keep this function call here 
LetterCapitalize(readline());