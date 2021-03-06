// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    // this works but exceeds time limit
//     const totals = [];
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j <= nums.length; j++){
// //note j = i + 1, to avoid slice(i, i) which would give you a sum of 0, producing wrong answer when nums are all negative
// // note also j <= , not just < , because of slice again - last index is excluded
//             const arr = nums.slice(i, j);
//             const sum = arr.reduce((running, current) => {
//                 return running + current;
//             }, 0);
//             totals.push(sum);
//         }
//     }
//     console.log(totals);
//     return Math.max(...totals);

// set a runningTotal to the first element, then loop
// for each new element, either:
//      a) element > runningTotal + element => reset runningTotal to element
//      b) runningTotal > runningTotal + element, in which case:
//          i) you'll want to include element anyway, due to what follows
//          ii) you'll want to count the total at that point
//              in order to cover both these options, keep another variable
//              maxTotal
//              that updates with each loop to Math.max(runningTotal, maxTotal)

// Another way of putting it - 
//  the intuition is to keep a running and a max, loop, add each new number to the running and update the max
//  the only issue is how to know when to start a new Array, i.e its start index
//  the only time you'd want to do that is when the fresh element is greater than itself + running, i.e. what's gone before is actually bringing it down.


// in short, the only time you want to start a new array is when your running total is negative!

    let runningTotal = nums[0]; //can't declare them both at once to the same value
    let maxTotal = nums[0];

    for(let i = 1; i < nums.length; i++){
        runningTotal < 0 ? runningTotal = nums[i] : runningTotal += nums[i];
        maxTotal = Math.max(runningTotal, maxTotal);
    }

    return maxTotal;

}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([-2, -1]))