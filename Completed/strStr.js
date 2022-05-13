// https://leetcode.com/problems/implement-strstr/

var strStr = function(haystack, needle) {
    // return haystack.includes(needle) ? haystack.indexOf(needle[0]) : -1;
    // almost... mississippi

    if(needle === "") return 0;

    // works
    // for(let i = 0; i < haystack.length; i++){
    //     if(haystack[i] === needle[0] && haystack.substring(i, i + needle.length) === needle){
    //         return i;
    //     }
    // }

    // return -1;

    // also works
    const haystackArr = haystack.split(needle);
    console.log(haystackArr);

    return haystackArr.length === 1 ? -1 : haystackArr[0].length;
};

console.log(strStr("hello", "ll"))