function carisatu2(arr) {
    var temp = [];
    arr.forEach(i => {
        temp.push(i.toUpperCase());
    });
    return temp[0];
}

var arr = ['Babu Baba'];
console.log(carisatu2(arr));