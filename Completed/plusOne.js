// https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
    // let num = Number(digits.join(""));
    // num++;
    // return num.toString().split("");

    
    const lastDigit = digits.length > 0 ? digits.pop() : 0; //because .pop() returns undefined if array empty - consider argument of [9]
    return lastDigit < 9 ? digits.concat([lastDigit + 1]) : plusOne(digits).concat([0]);

    
};

console.log(plusOne([2, 3]))