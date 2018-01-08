var ascii = function (str1, str2) {
  var count = 0;
  
  var str1Dict = {};
  var str2Dict = {};
  
  for (let x = 0; x < str1.length; x++) {
    str1Dict[str1[x]] = true;
  }
  for (let y = 0; y < str2.length; y++) {
    str2Dict[str2[y]] = true;
    if (!(str2[y] in str1Dict)) {
      count += str2[y].charCodeAt(0);
    }
  }
  for (let z = 0; z < str1.length; z++) {
    if (!(str1[z] in str2Dict)) {
      count += str1[z].charCodeAt(0);
    }
  }
  
  return count
}

console.log(ascii("boat", "got"))