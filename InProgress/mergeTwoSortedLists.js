// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
    const answer = list1.concat(list2);
    return answer.sort((a, b) => a - b);
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));