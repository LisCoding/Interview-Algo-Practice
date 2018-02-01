var isHappy = function(n) {
  if (n<1 || typeof(n) !== 'number') {
    console.log("HI", typeof(n))
    return false;
  }
    let letter = n.toString()
    let dict = {};
    while (!(letter in dict)) {
      dict[letter] = true;
      let total = 0;
      for (let i=0; i<letter.length; i++) {
        total += letter[i]*letter[i];
      }
      console.log(total)
      if(total == 1) {
        return true;
      }
      letter = total.toString()
    }
    return false;
};

console.log(isHappy(10))
