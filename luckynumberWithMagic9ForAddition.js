function luckynumberWithMagic9ForAddition(num) {
  if(!num){
    return num;
  }
  else if (!num%9) {
    return 9;
  }
  else {
    return num%9
  }
}

luckynumberWithMagic9ForAddition(103123123)