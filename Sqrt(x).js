var mySqrt = function(x, guess) {
  if (x === 0) {
    return 0;
  }
  if (!guess) {
    guess = x/2;
  }
  var half = x/guess;
  var newGuess = (guess + half)/2;
  if (guess == newGuess){
    console.log(guess)
    return Math.floor(guess);
  }
  return mySqrt(x, newGuess);
};

var mySqrtTwo = function(x) {
  var lower = 0;
  var higher = Math.floor(x/2)+1;
  if (x < 2) {
    return x;
  }
  while (lower+1 < higher) {
    var mid = Math.floor((lower + higher)/2);
    if (mid*mid == x) {
      return mid;
    }
    else if (mid*mid > x){
      higher = mid;
    }
    else {
      lower = mid;
    }
  }
  return lower;
}




console.log(mySqrt(8))
console.log(mySqrtTwo(2))