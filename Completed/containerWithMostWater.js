// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    // area(a, b) = Math.min(a,b) * arr.indexOf(b) - arr.indexOf(a)
    // maybe Math.max to check which index is bigger
    // can't check every combination because too many

    // if you have a runningMaximum, and x axis (i.e. arr splice.length) * maximumCommonHeight < runningMaximum, can stop calculating

    // const arraySlices = (len, arr) => return array of all possible array slices of a given length
    // const maxPossibleRemaining = (x, arr) => x * max common remaining
        // where x = len

    // const maxPossibleRemaining = (arr, x, num) => {
    //     const copy = [...arr]
    //     const max = Math.max(...arr);
    //     const index = arr.indexOf(max);
    //     copy.splice(index, 1);
    //     const secondMax = Math.max(...copy);
    //     return x * secondMax > num;
    // }

    // const arraySlices = (arr, len) => {
    //     const result = [];
    //     let start = 0;
    //     let end = len;
    //     while(end <= arr.length){
    //         result.push(arr.slice(start, end));
    //         start++;
    //         end++;
    //     }
    //     return result;
    // }

    // let runningMaximum = 0;

    // let sliceLength = height.length;

    // let slices;

    // while(maxPossibleRemaining(height, sliceLength - 1, runningMaximum)){
    //     slices = arraySlices(height, sliceLength);
    //     console.log(slices);
    //     let area;
    //     slices.forEach(slice => {
    //         area = (slice.length - 1) * (Math.min(slice[0], slice[slice.length - 1]));
    //         runningMaximum = Math.max(runningMaximum, area);
    //     })
    //     sliceLength--;
    // }

    // return runningMaximum;


    // EXPLANATION
    // use the two-pointer approach, beginning with the two ends of the array and stepping inwards. Here's the crucial piece of logic:
    //      with an area between lines a and b, where a > b, stepping inwards from a can NEVER be bigger.
    //      because the smaller number (b) sets the height of the container, so that can't increase, and of course the width of the container is decreasing as you step inwards
    //      so, if you always step in from the smaller number, you're not missing anything.
    
    let max = 0;

    let l = 0;
    let r = height.length - 1;

    while(l !== r){ //i.e. until they meet in the middle
        const containerHeight = Math.min(height[l], height[r]);
        const containerWidth = r - l;
        const area = containerHeight * containerWidth;
        max = Math.max(max, area);
        height[l] > height[r] ? r-- : l++;
    }

    return max;
};

const test = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(test));