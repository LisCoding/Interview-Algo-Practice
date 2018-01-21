var isPalindrome = function(s) {
  let x = 0;
  let y = s.length-1;
  
  while (x<y) {
    if(!(s[x].match(/[a-z0-9]/i))){
      x++
      continue;
    }
    if(!(s[y].match(/[a-z0-9]/i))){
      y--
      continue;
    }
    if(s[x].toLowerCase() !== s[y].toLowerCase()) {
      return false;
    }
    x++;
    y--;
  }
  return true
};

console.log(isPalindrome("pP"))

