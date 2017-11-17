function Palin(str){
  if (!str.length) {
    return false;
  }
  else if (str.length === 1) {
    return true;
  }
  else {
    var i = Math.floor(str.length/2);
    var odd = 0;
    var x = 1;
    if (str.length % 2 === 0) {
      if (str[i] !== str[i-1]) {
        return false;
      }
      odd = 1;
    }
    while (x <= i) {
      if(str[i+x] !== str[i-x-odd]){
        return false
      }
      x++
    }
    return true;
  }
}


// console.log(Palin("alayalt"))

function LongestPalin(str){
  if(!str.length){
    return false;
  }
  else if (str.length === 1) {
    return str;
  }
  else {
    var longest = str[0];
    for (let i = 0; i < str.length-1; i++) {
      var grow = str[i];
      for (let j=i+1; j<str.length; j++) {
        grow = grow + str[j];
        console.log("grow", grow)
        if(longest.length < grow.length){
          if (Palin(grow)) {
          longest = grow;
          }
        }

      }
    }
    return longest;
  }
}

console.log(LongestPalin("hello"))






