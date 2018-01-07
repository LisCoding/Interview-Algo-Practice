var lengthOfLastWord = function(s) {
  var size = 0;
  var space = true;
  for (let x = s.length-1; x > -1; x--){
    if (s[x] != ' '){
      space = false;
      size++
    }
    else if (s[x] == ' ' && !space){
      return size;
    }
    
  }
  return size
};

console.log(lengthOfLastWord("Hello World  "))