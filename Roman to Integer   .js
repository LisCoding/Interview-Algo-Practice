var romanToInt = function(s) {
    var romanDict = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
      }
    var count = 0;
    for (let x = 0; x < s.length; x++) {
      if (romanDict[s[x]] < romanDict[s[x+1]]) {
        count += (romanDict[s[x+1]] - romanDict[s[x]]);
        x++
      } else {
      count += romanDict[s[x]]
      }
    }
    return count
};

s = "MMMCMXCIX";
console.log(romanToInt(s))