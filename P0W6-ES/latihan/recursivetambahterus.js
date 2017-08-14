var loop = 0; // Menyiapkan varibel tampung
function AdditivePersistence(num) { 
    var oldnum = num.toString().split('').map(Number); // Menyiapkan sebuah array number
    if (oldnum.length === 1) {
        return loop;
    } else {
        var newnum = oldnum.reduce(function(total, num){return total + num});
        console.log(newnum);
        loop += 1;
        // console.log(loop);   
        return AdditivePersistence(newnum);
    }    
}

var num = [1235];
console.log(AdditivePersistence(num));