function RectangleArea(strArr) {
  var titik1 = strArr[0][1];
  var titik2 = strArr[0][3];
  var titik3 = strArr[1][1];
  var titik4 = strArr[1][3];
  var titik5 = strArr[2][1];
  var titik6 = strArr[2][3];
  var titik7 = strArr[3][1];
  var titik8 = strArr[3][3];

  var angka1 = Number(titik1);
  var angka2 = Number(titik2);
  var angka3 = Number(titik3);
  var angka4 = Number(titik4);
  var angka5 = Number(titik5);
  var angka6 = Number(titik6);
  var angka7 = Number(titik7);
  var angka8 = Number(titik8);

  var arr = [angka1, angka2, angka3, angka4, angka5, angka6, angka7, angka8];
  var keurut = arr.sort(function(a,b) {return b-a});
  var sisi1 = keurut[0]-keurut[4];
  var sisi2 = keurut[1]-keurut[5];
  return sisi1*sisi2;
}
  
var strArr = ["(1 1)","(1 3)","(3 1)","(3 3)"]; 
// keep this function call here 
console.log(RectangleArea(strArr));


