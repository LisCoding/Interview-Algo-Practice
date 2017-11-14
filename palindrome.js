var isPalindrome = function(x) {
  if(x>-1 && x<10) {
    return true;
  }
  if(x<-1) {
    return false
  }
  
  str = x.toString();
  for(var i =0 ; i< Math.floor(str.length/2); i++) {
    if(str [i] !== str[str.length-1-i]) {
      return false
    }
  } 
  return true
  
};

console.log(isPalindrome(-3332))