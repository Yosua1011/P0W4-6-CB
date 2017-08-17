function ArrayMatching(strArr) { 
//   // ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]);//"3-3-6-2"
//   var res = input
//   .map(str => str
//        .replace('[', '')
//        .replace(']', '')
//        .split(',')
//        .map(val => parseInt(val)));

// console.log(res)
  
  var berubah = strArr.map(str => str.replace('[','').replace(']','').split(',').map(val => parseInt(val)));

  // var secondArrayNoBrackets = strArr[1].replace(/\[+(.*?)\]+/g,"$1");

  // console.log(firstArrayNoBrackets);
  // console.log(typeof firstArrayNoBrackets);
  // console.log(secondArrayNoBrackets);
  // console.log(typeof secondArrayNoBrackets);
  
  var splittedFirstArray = berubah[0];
  var splittedSecondArray = berubah[1];
  
  var parsedArrayOne = []; 
  var parsedArrayTwo = [];
  
  splittedFirstArray.forEach(i => {
    parsedArrayOne.push(parseInt(i));
  });
  
  splittedSecondArray.forEach(i => {
    parsedArrayTwo.push(parseInt(i));
  });

  console.log(parsedArrayOne);
  console.log(typeof parsedArrayOne);
  console.log(parsedArrayTwo);
  console.log(typeof parsedArrayTwo);
  
  var firstArrayLength = parsedArrayOne.length;
  
  var extraPartOfSecondArray = parsedArrayTwo.slice(firstArrayLength, parsedArrayTwo.length);
 
  var summedString = '';
  
  for ( var i = 0; i < firstArrayLength; i++) {
    for ( var j = 0; j < firstArrayLength; j++) {
      if(i === j) {
          summedString += parsedArrayOne[i] + parsedArrayTwo[j];
          summedString += '-';
      }
    }
  }
  var parsedextraPartOfSecondArray;
  
  extraPartOfSecondArray.forEach((i, index) => {
     parsedextraPartOfSecondArray = +i;
     summedString += parsedextraPartOfSecondArray;
     summedString += '-';
  });
  console.log(summedString);
  console.log(summedString.slice(0, summedString.length-1));
}
// ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]);//"7-4-6-10-6"
// ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]);//"6-4-13-17"
ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]);//"3-3-6-2"