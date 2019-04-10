const assert = require('assert');

function multiply(by, number){   
  if(number == 0 || by ==0){
    return 0;
  }

  return (number+(multiply(number, --by)));

}

function multiplyBy321(number){
  return multiply(number, 321);
}

assert(multiplyBy321(2) == 642);
assert(multiplyBy321(1) == 321);
assert(multiplyBy321(0) == 0);
assert(multiplyBy321(-1) == -321);
assert(multiplyBy321(-2) == -642);
