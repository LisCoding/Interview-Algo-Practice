var myAtoi = function(str) {
    if(typeof(str)!=='string') {
      return null
    }
    
    let result = 0;
    let positive = true;
    let started = false;
    for (let i=0; i<str.length; i++) {
      if (str[i] === " " && started) {
        console.log("one")
        break;
      }
      else if (str[i] === " ") {
        console.log("two")
        continue;
      }
      else if (str[i] === "-" && result === 0 && !started) {
        positive = false;
        started = true;
        console.log("three")
        continue;
      }
      else if (str[i] === "+" && result === 0 && !started) {
        positive = true;
        started = true;
        console.log("four")
        continue;
      }
      else if (isNaN(str[i]%10)) {
        console.log("five")
        break;
      }
      else {
        started = true;
        console.log("six")
      }
      result = result*10;
      result += str[i]%10;
      if (result > 2147483647) {
        if (positive) {
          result = 2147483647;
        }
        else {
          result = 2147483648;
        }
        break;
      }
      console.log("result", result, str[i])
    }
    
    if (!positive && result > 0) {
      result *= -1;
    }
    
    return result
};

var myAtoi2 = function(str) {
  
  let number = parseInt(str)
  if (isNaN(number)) {
    return 0
  }
  else if (number > 2147483647){
    return 2147483647
  }
  else if (number < -2147483647) {
    return -2147483648
  }
  
  return number
  
}

console.log(myAtoi2(""))





