function singleDigit(num) {
  if(num<10){
    return num;
  }
  let temp = 1
  while(num>0){
    temp *= num%10;
    console.log(temp, num)
    num = Math.floor(num/10)
    // console.log(temp, num)
  }
  return singleDigit(temp)
}

singleDigit(123)