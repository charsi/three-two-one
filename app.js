const assert = require('assert');

function multiply(number, by){   
  if(number == 0 || by ==0){
    return 0;
  }

  if(by<0){
    return by+(multiply(by,--number));
  }  

  return number+(multiply(number, --by));

}

function multiplyBy321(number){
  return multiply(number, 321);
}

console.log('321*0 calculated :' +multiplyBy321(0), 'should be '+321*0);
console.log('321*1 calculated :' +multiplyBy321(1), 'should be '+321*1);
console.log('321*2 calculated :' +multiplyBy321(2), 'should be '+321*2);
console.log('321*25 calculated :' +multiplyBy321(25), 'should be '+321*25);
console.log('321*-3 calculated :' +multiplyBy321(-3), 'should be '+321*-3);
console.log('321*-1 calculated :' +multiplyBy321(-1), 'should be '+321*-1);

assert.equal(multiplyBy321(2), 2*321);
assert.equal(multiplyBy321(1), 1*321);
assert.equal(multiplyBy321(0), 0*321);
assert.equal(multiplyBy321(-1), -1*321);
assert.equal(multiplyBy321(-2), -2*321);

assert.equal(multiply(2,4), 2*4);
assert.equal(multiply(56,37), 56*37);
assert.equal(multiply(0,37), 0*37);
assert.equal(multiply(-2,667), -2*667);
assert.equal(multiply(4,-25), 4*-25);


