var strStr = function(haystack, needle) {
  
  if (needle === "") {
    return 0;
  }
  let needleLength = needle.length;
  let x=haystack.indexOf(needle[0]);
  console.log(x)
  
  while(x>-1) {
    console.log(haystack.substring(x, x+needleLength), x, needleLength)
    if (haystack.substring(x, x+needleLength) === needle) {
      return x;
    }
    else {
      x=haystack.indexOf(needle[0], x+1)
      console.log(x)
    }
  }

  return -1;
};

console.log(strStr("mississippi", "issip"))
