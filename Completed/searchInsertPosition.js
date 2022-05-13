// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    if(!nums.includes(target)){
        nums.push(target);
        nums.sort((a, b) => a-b);
    }
    return nums.indexOf(target);
};