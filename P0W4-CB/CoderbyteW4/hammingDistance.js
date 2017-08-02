function HammingDistance(strArr) {
    var str1 = strArr[0];
    var str2 = strArr[1];
    var tot = 0;
    for (i=0; i<strArr[0].length; i++) {
        if (str1[i] !== str2[i]) {
            tot++;
        } else {
          
        }
    }
    return tot;
}
// keep this function call here 
HammingDistance(readline());