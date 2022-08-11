let string;

const reverseString = function(string) {
    let splitString = string.split('');
    let reverseArray = splitString.reverse();
    let newString = reverseArray.join('');
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
