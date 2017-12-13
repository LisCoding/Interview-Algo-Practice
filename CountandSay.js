var countAndSay = function(n) {
    if (n < 1) {
      return false
    }
    if (n == 1) {
      return "1"
    }
    var numstr = "11";
    var x = 2;
    
    while (x < n) {
      var intemp = 1;
      var tempstr = "";
      var fortemp = numstr[0];
      for (let y = 1; y < numstr.length; y++){
        if (fortemp == numstr[y]) {
          intemp++;
        }
        if (fortemp != numstr[y]) {
          tempstr = tempstr + intemp + fortemp;
          intemp = 1;
          fortemp = numstr[y];
        }
      }
      tempstr = tempstr + intemp + fortemp;
      numstr = tempstr;
      x++;
    }
    return numstr;
};

console.log(countAndSay(0))