// https://leetcode.com/problems/valid-parentheses/

// () [] {}
// ({[}])
// ([{}]{})

var isValid = function(s) {

    if(s.length % 2 === 1){
        return false;
    }

    const openers = ['(', '[', '{'];
    const closers = [')', ']', '}'];

    const tracker = [];

    for(let i = 0; i < s.length; i ++){
        const bracket = s[i];
        if(openers.includes(bracket)){
            tracker.push(bracket)
        } else {
            const index = closers.indexOf(bracket);
            const opener = openers[index];
            const lastOpener = tracker.pop();
            if(opener !== lastOpener){
                return false;
            }
        }

    }

    return tracker.length === 0;

};

console.log(isValid('(){}[]')) //true
console.log(isValid('(){}]')) //false
console.log(isValid('()[{}]')) //true
console.log(isValid('()[{}')) //false
console.log(isValid('([)]{}')) //false