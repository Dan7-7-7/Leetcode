// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    // this works but exceeds time limit
    const totals = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j <= nums.length; j++){
//note j = i + 1, to avoid slice(i, i) which would give you a sum of 0, producing wrong answer when nums are all negative
// note also j <= , not just < , because of slice again - last index is excluded
            const arr = nums.slice(i, j);
            const sum = arr.reduce((running, current) => {
                return running + current;
            }, 0);
            totals.push(sum);
        }
    }
    console.log(totals);
    return Math.max(...totals);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([-2, -1]))