var strStr = function(haystack, needle) {
  if(needle === "") {
    return 0;
  }
  
  for (let i=0; i< haystack.length; i++) {
    if(haystack[i] === needle[0]){
      var x = 1;
      while(x < needle.length+1) {
        console.log("while", x, i, haystack[i+x], needle[x])
        if(x === needle.length) {
          return i;
        }
        else if (haystack[i+x] === needle[x]) {
          x++;
        }
        else{
          x = needle.length+1;
        }
      }
    }
  }
  return -1;

};

console.log(strStr("misissippi", "sipp"))