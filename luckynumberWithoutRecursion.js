function luckynumberWithoutRecursion(num) {
  if(num<10){
    return num
  }
  
  while (num>9){
    base=1
    while(num>0){
      base*=num%10;
      num=Math.floor(num/10)
    }
    num=base
  }
  return num
}

luckynumberWithoutRecursion(99)