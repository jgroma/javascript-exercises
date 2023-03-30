const add = function(a,b) {
  return a + b;	
};

const subtract = function(a,b) {
	return a-b
};

const sum = function (array) {

  if (array.length === 0) {
  return 0;
  } else {
    let result = array.reduce((a,b) => a+b);
    return result;
  }

};

const multiply = function(numbers) {
  let result = numbers.reduce((a,b) => a*b);
  return result;
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  if (a === 0) {
   return 1;
  } else {
    total = a;
  for (let i = 1; i < a; i++) {
    total *= i;
  }
  return total;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
