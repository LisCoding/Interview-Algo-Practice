var trailingZeroes = function(n) {
    total = 0;
    let x = 5;
    while(x<=n){
      total += parseInt(n/x);
      x *= 5;
    }
    return total
};

console.log(trailingZeroes(5))