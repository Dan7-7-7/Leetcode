// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    // not allowed to create a new array!
    // const copy = [...nums];
    // nums.forEach((num, index) => {
    //     // console.log(copy.join('').split(num))
    //     if(copy.join('').split(num).length > 2){
    //         copy.splice(index, 1);
    //     }
    // })
    // return copy;

    nums.forEach((num, index) => {
        while(index !== nums.lastIndexOf(num)){
            nums.splice(nums.lastIndexOf(num), 1);
        }
    })
    return nums.length;
    // it wants return value to be number of elements it should check

    // alternative, quicker solution
    let left = 0; //this will track the index of the last found unique number
    //this will check each of the following numbers, skipping any duplicates, so that unique ones can be inserted
    for(let right = 1; right < nums.length; right++){ 
        if(nums[left] !== nums[right]){ //this would mean right is a new unique number
            nums.splice(left+1, 0, nums[right]); //there could be any number of indices between left and right
            left++;
        }
    } 
    return left + 1;
};

console.log(removeDuplicates([1,1,2]))

// const arr = [1, 2, 3];

// arr[1] = 3;

// console.log(arr); //[1, 3, 3]