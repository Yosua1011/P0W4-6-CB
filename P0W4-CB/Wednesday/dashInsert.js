/**
Coderbyte Challenge Title: Dash Insert
Coderbyte Challenge Level: Easy

Soal:
Challenge
Using the JavaScript language, have the function DashInsert(str) 
insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number. 

Sample Test Cases
Input:99946
Output:9-9-946

Input:56730
Output:567-30

Hint
You can simply loop through the string, inserting a dash whenever 
you encounter an odd number that also has an odd number directly preceding it.

Main theme: Intinya, selipin dash pakai slice di condition antar bilangan ganjil

Solution:
1. Gunakan while loop karena untuk step nya dapat dikonfigurasi
sesuai conditional masing-masing
2. Jadi, selama i kurang dari length str
3. Jika elemen str indeks i dan elemen str indeks i+1 adalah angka ganjil maka:
- str.slice(0, i+1) akan mengambil elemen str yang nanti akan berada di sebelah kiri '-'
- str.slice(i+1) akan mengambil elemen str yang nanti akan berada di sebelah kanan '-' hingga
bertemu dengan angka ganjil kembali
- step di while di assign dengan i = i + 2 karena IF conditional selalu mengecek elemen dalam
str secara berpasangan
4. Jika elemen str indeks i dan elemen str indeks i+1 bukan angka ganjil maka:
Lanjutkan loopingnya tanpa melakukan apapun
**/
function DashInsert(str) { 
    var i = 0;
    while (i < str.length-1) {
        if (Number(str[i]) % 2 === 1 && Number(str[i+1]) % 2 === 1) {
            str = str.slice(0, i+1) + '-' + str.slice(i+1);
            i = i + 2;
        }
        else {
            i++;
        }
    }

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
DashInsert(readline());