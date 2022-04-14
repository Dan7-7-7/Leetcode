var longestPalindrome = function(s) {

    // ANSWER THREE

    const tester = (str, indexOne, indexTwo=indexOne) => {
        // expanding through centres to check palindromes
        while(str[indexOne] === str[indexTwo] && indexOne >= 0 && indexTwo <= str.length){
            indexOne--;
            indexTwo++;
        }
        return str.slice(indexOne + 1, indexTwo);
    }

    // default parameters are necessary to prevent argument of undefined, with testEven e.g. str.slice(1, 1)
    const longest = (a = "", b = "") => a.length > b.length ? a : b;
        
    let answer, testOdd, testEven, longestTest = "";

    for(let i = 0; i < s.length; i++){
        testOdd = tester(s, i);
        testEven = tester(s, i, i+1);
        longestTest = longest(testEven, testOdd)
        answer = longest(answer, longestTest);
    }

    return answer;

    // ANSWER TWO
    
    // const isPalindrome = (str) => {
    //     const arr = str.split('').reverse();
    //     return str === arr.join('');
    // }

    // const sliceArray = (str, len) => {
    //     // return array of all possible slices of that length
    //     let start = 0;
    //     let end = len;
    //     const arr = [];
    //     while(end <= str.length){
    //         arr.push(str.slice(start, end));
    //         start++;
    //         end++;
    //     }
    //     return arr;
    // }

    // let tests;
    // let sliceLength = s.length;
    // while(sliceLength > 0){
    //     tests = sliceArray(s, sliceLength);
    //     // note that forEach doesn't work here due to a quirk: there is no way to exit the loop (i.e. to return)!
    //     for(let i = 0; i < tests.length; i++){
    //         if(isPalindrome(tests[i])){
    //             return tests[i];
    //         }
    //     }
    //     sliceLength--;
    // }

    // ANSWER ONE

    // let sub = '';
    // let longestPalSub = '';
    // for(let i = 0; i < s.length; i++){
    //     for(let j = 1; j <= s.length; j++){
    //         sub = s.slice(i, j);
    //         if(isPalindrome(sub) && sub.length > longestPalSub.length){
    //             longestPalSub = sub;
    //         }
    //     }
    // }

    // return longestPalSub;

};

console.log(longestPalindrome('babad'))
// console.log('babad'.slice[1,1]);