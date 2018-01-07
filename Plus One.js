var plusOne = function(digits) {
  var x = digits.length-1;
  if (digits[digits.length-1] < 9) {
    digits[digits.length-1] += 1;
    console.log("hi")
  } else {
    while (digits[x] == 9) {
      digits[x] = 0;
      console.log("hiii", digits[x])
      if (x === 0) {
        digits[x] ++;
        digits.push(0);
        return digits;
      }
      x--
    }
    console.log(x)
    digits[x] += 1;
    
  }
  return digits;
};

console.log(plusOne([8,9,8,9]))