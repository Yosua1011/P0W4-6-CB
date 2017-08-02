/**
Challenge:
Have the function Superincreasing(arr) take the array of numbers stored in 
arr and determine if the array forms a superincreasing sequence where each 
element in the array is greater than the sum of all previous elements. 
The array will only consist of positive integers. For example: if arr is 
[1, 3, 6, 13, 54] then your program should return the string "true" because 
it forms a superincreasing sequence. If a superincreasing sequence isn't formed, 
then your program should return the string "false" 
**/

function Superincreasing(arr) {
    var maxInd = arr.length - 1;
    var target;
    var sum;

    for (var i = maxInd; i > 0; i--) {
        target = arr.pop()
        sum = arr.reduce(function(val1, val2) {
            return val1 + val2;
        });
        if (sum >= target) {
            return 'false';
        }
    }
    return 'true';

}
Superincreasing(readline());
