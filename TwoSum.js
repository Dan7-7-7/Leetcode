// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {

    // works
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
    //     }
    // }

    // would have been nice, but two issues: returning the index; avoiding an extra element, half the target
    // const sumNums = nums.filter(num => nums.includes(target - num));

    // if(sumNums.length > 2){
    //     sumNums = sumNums.filter(num => target / 2 !== num);
    // }

    // return sumNums.map(num => nums.indexOf(num));
    
    // works but slower than the double for loop
    // const answer = [];
    // nums.forEach((element, index) => {
    //     const copy = [...nums];
    //     copy.splice(index, 1);
    //     if(copy.includes(target - element)){
    //         answer.push(index);
    //     }
    // });
    // return answer;

    // likewise works but slower
    // for(let i = 0; i < nums.length; i++){
    //     const copy = [...nums]
    //     copy.splice(i, 1);
    //     if(copy.includes(target - nums[i])){
    //         return [i, nums.lastIndexOf(target - nums[i])];
    //     }
    // }

    // not quite .. slice and splice both problematic here
    const sumNums = nums.filter((num, index) => .includes(target - num));
    return [nums.indexOf(sumNums[0]), nums.lastIndexOf(sumNums[1])];

};

const arr = [1, 2, 3, 4];

console.log([...arr].splice(1, 1));