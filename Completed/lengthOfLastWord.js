// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
    // let arr = s.split(" ");
    // arr = arr.filter(item => item.trim() != "");
    // return arr[arr.length - 1].length;

    // you only need length of last word! too thorough

    const arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));