// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {

    // let prefix = strs[0];
    // let newPrefix = "";
    // for(let i = 1; i < strs.length; i++){
    //     let j = 0;
    //     while(strs[i][j] === prefix[j] && j < prefix.length){
    //         newPrefix += strs[i][j];
    //         j++;
    //     }
    //     prefix = newPrefix;
    //     newPrefix = "";
    // }
    // return prefix;


    // slightly faster than the above solution
    const longestCommonSubstring = (s, t) => {
        let i = s.length;
        while(i > 0){
            if(t.slice(0, i) === (s.slice(0, i))){
                return s.slice(0, i);
            }
            i--;
        }
        return "";
    }
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        if(longestCommonSubstring(prefix, strs[i]) === ""){
            return "";
        } else prefix = longestCommonSubstring(prefix, strs[i]);
    }
    // strs.forEach(str => prefix = longestCommonSubstring(prefix, str));
    // the above was a bit slower due to not exiting the loop at ""
    return prefix;

};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["c","acc","ccc"]));