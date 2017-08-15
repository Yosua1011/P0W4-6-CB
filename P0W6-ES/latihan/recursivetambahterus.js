// Menghitung angka dengan length 1 digit
function tambahTerus(num){
    var newStr = String(num);
    var angkaPisah = newStr.split('').map(Number);
        if(angkaPisah.length === 1) {
            return angkaPisah.toString();
        } else {
            var tambah = angkaPisah.reduce((a, b) => {
            return a + b;
            });
            // console.log(tambah);
            return tambahTerus(tambah); 
        }
}

// Menghitung berapa banyak pengulangan
// function tambahTerus(num) { 
    
//     var result = recursive(String(num).split('').map(Number).reduce(function(x,y){return x+y}), 1);
    
//         function recursive(n, count){
//             c = count;
//             if(n < 10)return c;
//             else{
//               count += 1
//               return recursive(String(n).split('').map(Number).reduce(function(x,y){return x+y}), count)
//         }
//     }
    
//     return num < 10 ? 0 : 'Pengulangan sebanyak ' + result + ' kali'
    
// }
console.log(tambahTerus(123)); //6
console.log(tambahTerus(1234)); //1
console.log(tambahTerus(88888888)); //1
console.log(tambahTerus(54)); //9

// // var loop = 0; // Menyiapkan varibel tampung
// function tambahTerus(num) { 
//     var oldnum = num.toString().split('').map(Number); // Menyiapkan sebuah array number
//     if (oldnum.length === 1) {
//         return oldnum.toString();
//     } else {
//         var newnum = oldnum.reduce(function(total, num){return total + num});
//         // console.log(newnum);
//         // loop += 1;
//         // console.log(loop);   
//         return tambahTerus(newnum);
//     }    
// }

// var num = [1235];
// console.log(AdditivePersistence(num));

// function factorial(num) {
//     if(num === 0) {
//         return 1;
//     } 

//     return num * factorial(num-1);
// }

// console.log(factorial(5));

// function factorial2(num1, num2) {
//     if(num1 >= 1) {
//         return num1 * factorial2((num1-num2),num2);
//     } else {
//         return 1;
//     }
// }

// console.log(factorial2(12,5));