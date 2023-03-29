const fibonacci = function(count) {
    let firstNumber = 1;
    let secondNumber = 1;
    let total = secondNumber;

    if (count < 0) {
        return "OOPS";
    } else if (count === 1) {
        return 0;
    } else if (count === 2) {
        return 1;
    } else {
        for (let i = 2; i < count; i++) {
            total = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = total;
        }
      return total;  
    }

};

// Do not edit below this line
module.exports = fibonacci;
