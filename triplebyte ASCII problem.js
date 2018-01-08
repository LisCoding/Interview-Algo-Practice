var ascii = function (str1, str2) {
  var count = 0;
  
  var str1Dict = {};
  var str2Dict = {};
  
  for (let x = 0; x < str1.length; x++) {
    if (!(str1[x] in str1Dict)) {
      str1Dict[str1[x]] = 1;
    }
    else {
      str1Dict[str1[x]]++
    }
  }
  for (let y = 0; y < str2.length; y++) {
    if (!(str2[y] in str2Dict)) {
      str2Dict[str2[y]] = 1;
    }
    else {
      str2Dict[str2[y]]++
    }
    if (str2[y] in str1Dict) {
      str1Dict[str2[y]]--;
    }
    if ((!(str2[y] in str1Dict)) || str1Dict[str2[y]] < 0) {
      count += str2[y].charCodeAt(0);
    }
  }
  for (let z = 0; z < str1.length; z++) {
    if (str1[z] in str2Dict) {
      str2Dict[str1[z]]--;
    }
    if ((!(str1[z] in str2Dict)) || str2Dict[str1[z]] < 0) {
      count += str1[z].charCodeAt(0);
    }
  }
  
  return count
}

console.log(ascii("boat", "got"))

