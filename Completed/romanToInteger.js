// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    const romans = {
        M : 1000,
        D : 500,
        C : 100,
        L : 50,
        X : 10,
        V : 5,
        I : 1
    }
    const numbers = s.split('').map(roman => romans[roman]);
    const answer = [];
    numbers.forEach((number, index) => {
            if(numbers[index+1] > number){
                answer.push(numbers[index+1] - number);
                numbers.splice(index+1, 1);
            } else answer.push(number);
    })
    return answer.reduce((previous, current) => previous + current);
};


console.log(romanToInt('IX')); //9
console.log(romanToInt('CIX')); //109
console.log(romanToInt('DCLXXXXIII')); //693