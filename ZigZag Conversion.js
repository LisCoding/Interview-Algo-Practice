var convert = function(s, numRows) {
  
    if (numRows === 1) {
      return s
    }
    
    let arr = [];
    let temp = 0;
    let bool = true;
    
    for (let i=0; i<s.length; i++) {
      if(arr[temp]===undefined) {
        arr[temp] = [s[i]]
      }
      else {
        arr[temp].push(s[i])
      }
      if(temp == (numRows-1)) {
        bool = false;
      }
      else if (temp === 0) {
        bool = true;
      }
      
      if (bool) {
        temp++;
      }
      else {
        temp--;
      }
    }
    
    let result = "";
    
    for (let j=0; j<arr.length; j++) {
      result += arr[j].join("")
    }

    return result
};

console.log(convert("PAYPALISHIRING", 2))
