let string;
let num;
let loopString;

const repeatString = function(string, num) {
    loopString = string
    if (num < 0) {
        return 'ERROR';
    } else if (num === 0) {
        return '';
    } else {
     for (let i = 1; i < num; i++) {
         loopString += string;
     }
    return loopString;
    }
};

// Do not edit below this line
module.exports = repeatString;
