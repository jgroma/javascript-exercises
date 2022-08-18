
const sumAll = function(firstNum, secondNum) {
   let total = firstNum + secondNum;

   if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
    return 'ERROR';
 } else if (firstNum < 0 || secondNum < 0) {
    return 'ERROR';
 } else if (firstNum > secondNum) {
      for (let i = firstNum - 1; i > secondNum; i--) {
        total += i;
    }
       return total;
   } else {
      for (let i = firstNum + 1; i < secondNum; i++) {
          total += i;      
   }
      return total;
   }
};

// Do not edit below this line
module.exports = sumAll;