var lengthOfLongestSubstring = function(s) {
    
    let substring = "";
    let longestSubstring = "";
    for(let i = 0; i < s.length; i++){
        if(substring.includes(s[i])){
            const index = substring.indexOf(s[i]) + 1;
            substring = substring.substring(index);
        }
        substring += s[i];
        if(longestSubstring.length < substring.length){
            longestSubstring = substring;
        }
    }
    return longestSubstring.length;

};

console.log(lengthOfLongestSubstring("abcabcbb"), lengthOfLongestSubstring("bbbbb"), lengthOfLongestSubstring("pwwkew"), lengthOfLongestSubstring(" "));