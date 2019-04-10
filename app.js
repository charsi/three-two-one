function multiply(number, by){
  if(number==0 || by==0){
    return 0;
  }

  if(by==0){
    throw 'can\'t divide by zero!';
  }

  if(by > 0 && number >0){
    return (number+(multiply(number, --by)));
  }

  if(by < 0 || number <0){
    return (number+(multiply(number, --by)))*-1;
  }
  
}

function multiplyBy321(number){
  return multiply(number, 321);
}

let result = multiplyBy321(2);

console.log(result);