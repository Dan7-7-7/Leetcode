// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    // forEach => find the pair which adds up to 0 - element (target);
    //          => forEach => find the one which === target - element

    const output = [];
    const tracker = {};

    for(let i = 0; i < nums.length; i++){
        const target = 0 - nums[i];
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                const targets = nums.filter(num => num === target - nums[j] && num !== nums[j]);
                targets.forEach((target, index) => {
                        output.push([nums[i], nums[j], target]);
                        // need to prevent this from pushing an array with the exact same indices
                    })
            }
        }
    }

    return output;
};