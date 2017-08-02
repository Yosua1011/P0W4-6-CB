/**
Coderbyte Challenge Title: Simple Mode
Coderbyte Challenge Level: Medium

Soal:
Using the JavaScript language, have the function SimpleMode(arr) 
take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 

Sample Test Cases
Input:5,5,2,2,1
Output:5

Input:3,4,1,6,10
Output:-1

Main Theme: Cari apakah angka index sebelah berulang atau tidak

Solution:
1. Inisialisasi var mode untuk nanti mendeklarasikan nilai modus
2. Inisialiasi var count2 sebagai variabel counter pembanding
3. Jalankan loop dengan counter i untuk menampilkan item arr index i
4. Inisialisasi var count sebagai variabel counter pembanding terhadap count2
5. Di dalam loop i, jalankan loop j untuk membandingkan item arr index i dengan j
6. Jika item arr index i dan j nilainya sama dan nilai index i dan j berbeda maka
nilai variabel count bertambah 1
7. Deklarasikan if state untuk membandingkan nilai count dan count2
8. Jika nilai count lebih besar dari count2 maka nilai count2 diassign dengan
nilai count dan nilai count dikembalikan kembali ke nilai 0. Tujuannya adalah
untuk menghitung item arr yang lain yang mungkin jumlahnya lebih dari 1 buah. 
Oleh karena itu, variabel pencatat perhitungan yaitu var count harus
dikembalikan lagi nilainya menjadi 0 untuk memulai kembali perhitungan
jumlah item arr yang lain
9. Jika nilai count2 tetap 0 karena masing-masing item arr hanya berjumlah 1
maka return -1

**/
function SimpleMode(arr) {
    var mode = 0;
    var count2 = 0;
    for(i=0; i<arr.length; i++) {
        var count = 0;
        for(j=0; j<arr.length; j++) {
            if(arr[i] === arr[j] && j!=i) {
                count ++;
            }
            if (count>count2) {
                mode = arr[i];
                count2 = count;
                count = 0
            }
        }
    }
    if (count2===0) {
        return -1;
    }
    return mode;
}
   
// keep this function call here 
console.log(SimpleMode([5,5,10,10,12,12,1,2,3]));