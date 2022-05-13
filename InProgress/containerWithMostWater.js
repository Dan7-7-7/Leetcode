var maxArea = function(height) {
    // area(a, b) = Math.min(a,b) * arr.indexOf(b) - arr.indexOf(a)
    // maybe Math.max to check which index is bigger
    // can't check every combination because too many

    // if you have a runningMaximum, and x axis (i.e. arr splice.length) * maximumCommonHeight < runningMaximum, can stop calculating

    // const arraySlices = (len, arr) => return array of all possible array slices of a given length
    // const maxPossibleRemaining = (x, arr) => x * max common remaining
        // where x = len

    const maxPossibleRemaining = (arr, x, num) => {
        const copy = [...arr]
        const max = Math.max(...arr);
        const index = arr.indexOf(max);
        copy.splice(index, 1);
        const secondMax = Math.max(...copy);
        return x * secondMax > num;
    }

    const arraySlices = (arr, len) => {
        const result = [];
        let start = 0;
        let end = len;
        while(end <= arr.length){
            result.push(arr.slice(start, end));
            start++;
            end++;
        }
        return result;
    }

    let runningMaximum = 0;

    let sliceLength = height.length;

    let slices;

    while(maxPossibleRemaining(height, sliceLength - 1, runningMaximum)){
        slices = arraySlices(height, sliceLength);
        console.log(slices);
        let area;
        slices.forEach(slice => {
            area = (slice.length - 1) * (Math.min(slice[0], slice[slice.length - 1]));
            runningMaximum = Math.max(runningMaximum, area);
        })
        sliceLength--;
    }

    return runningMaximum;

};

const test = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(test));