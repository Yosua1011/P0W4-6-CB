/**
Coderbyte Challenge Title: Product Digits
Coderbyte Challenge Level: Easy

Soal:
Have the function ProductDigits(num) take the num parameter being passed which 
will be a positive integer, and determine the least amount of digits you need 
to multiply to produce it. For example: if num is 24 then you can multiply 8 by 3 
which produces 24, so your program should return 2 because there is a total of 
only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9, 
so in this case your program should output 3 because you cannot reach 90 
without using a total of 3 digits in your multiplication. 

Main Theme: jalanin loop, kali tiap unsur loop, jadiin string jadiin angka, urutin
jadiin string lagi buat diukur length nya

Solution:
1. Insialisasi variabel answers sebagai array penampung deret bilangan 
yang dapat menjadi faktor pengali num
2. jalankan dua looping sebagai berikut:
a. looping i untuk bilangan faktor pengali pertama
b. looping j untuk bilangan faktor pengali kedua
3. Jika nilai i dikali j dapat menghasilkan num maka array penampung yaitu
answers akan dimasukkan bilangan i dan j yang sebelumnya dijadikan string terlebih dahulu.
Bilangan i dan j masing-masing dijadikan string lalu dijumlah alias disatukan sehingga
dapat diukur panjang atau jumlah digitnya. Setelah i dan j disatukan maka langkah
selanjutnya adalah di convert menjadi number agar dapat di urutkan menggunakan sort
4. Urutukan elemen array answers dari urutan terkecil ke terbesar. Caranya simple, isi
dalam curly bracket sort function dengan tulisan a-b. Jika ingin descending hanya perlu
mengubah ke b-a
5. Setelah diurutkan maka langkah selanjutnya adalah mengeluarkan elemen paling
pertama dari array answers karena memiliki nilai paling kecil setelah itu diconvert
menjadi string dan diukur length nya
6. Hasilnya anda mendapatkan total digit terkecil dari faktor pengali num

**/

function ProductDigits(num) { 
    var answers = [];
    for(i=0;i<=num;i++){
        for(j=0;j<=num;j++){
            if(i * j === num){
                answers.push(Number(i.toString() +j.toString()));
            }
        }
    }
  
    answers.sort(function(a,b){
       return a-b;
    });  
  console.log(answers);
    return answers.shift().toString().length;
}
   
// keep this function call here 
console.log(ProductDigits(5000));
    

