// https://leetcode.com/problems/remove-element/

// must remove element in-place

var removeElement = function(nums, val) {
    let index = 0
    while(index < nums.length){
        nums[index] === val ? nums.splice(index, 1) : index++
    }
    return index
};