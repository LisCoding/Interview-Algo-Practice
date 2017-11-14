//Determine whether an integer is a palindrome. Do this without extra space.
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

// More efficient solution

var isPalindrome = function(num) {
    if ( num == 0) {
        return true;
    }
    var reversed = 0;
  var original = num;
    
  if (num < 0 || (num % 10 === 0)) {
    return false;
  }
  while (num > 0) {
    reversed = (reversed * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return original == reversed;
};