const assert = require('assert');

function multiply(num1, num2){   
  if(num1 == 0 || num2 ==0){
    return 0;
  }

  if(num1<0 && num2<0){
    let pos1 = Math.abs(num1);
    let pos2 = Math.abs(num2);

    return multiply(pos1,pos2);
    
  } 

  if(num2<0){
    return num2+(multiply(num2,--num1));
  }  

  return num1+(multiply(num1, --num2));

}

function multiplynum2321(number){
  return multiply(number, 321);
}

console.log('321*0 calculated :' +multiplynum2321(0), 'should be '+321*0);
console.log('321*1 calculated :' +multiplynum2321(1), 'should be '+321*1);
console.log('321*2 calculated :' +multiplynum2321(2), 'should be '+321*2);
console.log('321*25 calculated :' +multiplynum2321(25), 'should be '+321*25);
console.log('321*-3 calculated :' +multiplynum2321(-3), 'should be '+321*-3);
console.log('321*-1 calculated :' +multiplynum2321(-1), 'should be '+321*-1);

assert.equal(multiplynum2321(2), 2*321);
assert.equal(multiplynum2321(1), 1*321);
assert.equal(multiplynum2321(0), 0*321);
assert.equal(multiplynum2321(-1), -1*321);
assert.equal(multiplynum2321(-2), -2*321);

assert.equal(multiply(2,4), 2*4);
assert.equal(multiply(56,37), 56*37);
assert.equal(multiply(0,37), 0*37);
assert.equal(multiply(-2,667), -2*667);
assert.equal(multiply(4,-25), 4*-25);
assert.equal(multiply(-4,-25), -4*-25);


