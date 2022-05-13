// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    // const s = x.toString();
    // const reverseS = s.split('').reverse();
    // return s === reverseS.join('');

    return x.toString() === x.toString().split('').reverse().join('');
};

// console.log(isPalindrome(313));
// console.log(isPalindrome(3123));
// console.log(isPalindrome(3113));

console.log(Array.of(123));
