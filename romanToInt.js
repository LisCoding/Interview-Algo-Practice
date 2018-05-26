var romanToInt = function(s) {
    let romanDict = {
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000
    }

    let total = 0;
    let previous;
    let mylength = s.length

    for (let i=0; i < mylength; i ++) {
      if (previous < romanDict[s[i]]) {
        total += romanDict[s[i]] - (2 * previous)
      }
      else{
        total += romanDict[s[i]]
      }
      previous = romanDict[s[i]]
    }

    return total
};

a = "III"
b = "VII"
c = "IV"
d = "LVIII"
e = "MCMXCIV"
console.log(romanToInt(a))
console.log(romanToInt(b))
console.log(romanToInt(c))
console.log(romanToInt(d))
console.log(romanToInt(e))
