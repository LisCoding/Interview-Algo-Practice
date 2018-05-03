function luckynumberWithout2Loops(num) {
  if(num<10){
    return num
  }
  base=1
  while(num>0){
    base*=num%10;
    num=Math.floor(num/10);
    if (!num && base>9){
      num=base;base=1;
    }
  }
  return base
}

luckynumberWithout2Loops(99)