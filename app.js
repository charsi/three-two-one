function multiply(number, by){
  if(number==0 || by==0){
    return 0;
  }

  if(by > 0){
    return (number+(multiply(number, --by)));
  }

  if(by > 0){
    return (number+(multiply(number, --by)))*-1;
  }
  
}



let result = multiply(2,321);

console.log(result);