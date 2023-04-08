const add = function(num1, num2) {
  res = num1 + num2;
  return res;
};

const subtract = function(num1,num2) {
	res = num1 - num2;
  return res;
};

const sum = function(arrays) {
	res = arrays.reduce((total, num) => {
    return total + num;
  },0)
  return res;
};

const multiply = function(arrays) {
  // let total = 1
  // for (i=0; i < arrays.length; i++)
  // {
  //   total *= arrays[i];
  // }
  // return total;
  res = arrays.reduce((total, num) => {
    return total * num;
  },1)
  return res;
};

const power = function(num1,num2) {
	res = Math.pow(num1,num2);
  return res;
};

const factorial = function(num) {
	let res = 1
  for (i = num; i > 1 ; i--)
  {
    res *= i;
  }
  return res;
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
