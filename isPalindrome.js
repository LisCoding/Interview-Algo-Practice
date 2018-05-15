var isPalindrome = function(x) {
    if (x<0){
      return false
    }
    temp = x
    total = 0
    while(temp>0){
      total = total*10
      total += Math.floor(temp%10)
      temp = Math.floor(temp/10)
    }
    return total == x
};

a = 111121111
console.log(isPalindrome(a))