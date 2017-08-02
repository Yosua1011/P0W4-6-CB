var regexPattern = new RegExp('[A-Z]');

var message = 'Regex itu Mudah!';
console.log(regexPattern.test(message));

var messageAllLowerCase = 'regex itu susah?';
console.log(regexPattern.test(messageAllLowerCase));

var str = 'belajar regex itu menyenangkan';
console.log(str.split(/\s/));

var stringAwal = 'Regex itu sangat susah!';
stringHasil = stringAwal.replace(/susah/, 'mudah');
console.log(stringHasil);

var message = 'Regex seru DEH!';
console.log(message.match(/e/));

console.log(message.match(/e/g));

console.log(message.match(/e/gi));

var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi));
console.log(string.match(/[a-z]/gi));

var arr = [1,2,3,4];
console.log(arr.shift());