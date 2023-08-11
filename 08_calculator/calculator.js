const add = function(first,second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arrayNumber) {
	
  let sum = 0;

  for(let i = 0; i< arrayNumber.length; i++){
    sum += arrayNumber[i];
  }
  return sum;

};

const multiply = function(arrayNumber) {

  let sum = 1;

  for(let i = 0; i< arrayNumber.length; i++){
    sum *= arrayNumber[i];
  }
  return sum;

};

const power = function(input, powerOfInput) {
	return Math.pow(input, powerOfInput);
};

const factorial = function(input) {
	
  if(input<0)return 0;
  if(input===0) return 1;

  let sum = 1;

  for(let i =0; i<input; i++){
    sum *=i+1;
  }

  return sum;
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
