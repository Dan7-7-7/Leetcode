// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {

    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
    //     }
    // }

    // const sumNums = nums.filter(num => nums.includes(target - num));

    // if(sumNums.length > 2){
    //     sumNums = sumNums.filter(num => target / 2 !== num);
    // }

    // return sumNums.map(num => nums.indexOf(num));

    let answer = [];
    nums.forEach((element, index) => {
        if(nums.includes(target - element)){
            answer.push(index);
        }
    });
    if(answer.length > 2){
        answer.filter(num => nums[num] !== target / 2);
    }
    return answer;

};