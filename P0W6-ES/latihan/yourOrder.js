// function order(words) {
// 	var arr = words.split(' ');
// 	arr.sort(function(a, b) {
// 		if (Number(a.match(/\d+/)) < Number(b.match(/\d+/))) {
// 			return -1;
// 		}
// 		else if (Number(a.match(/\d+/)) > Number(b.match(/\d+/))) {
// 			return 1
// 		}
// 		else {
// 			return 0
// 		}
// 	});
// 	return arr.join(' ');
// }
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
      	console.log(array[j].indexOf(i));
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order(""));