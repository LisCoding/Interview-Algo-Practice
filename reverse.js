var reverseTightly = function(x) {
    if (x<0){
        return parseInt(x.toString().split('').slice(1).reverse().join(''))*-1 < -2147483647 ? 0 : parseInt(x.toString().split('').slice(1).reverse().join(''))*-1
    }
    return parseInt(x.toString().split('').reverse().join('')) > 2147483647 ? 0 : parseInt(x.toString().split('').reverse().join(''))
};

var reverse = function(x) {
    let neg = false;
    if (x<0){
        neg = true;
    }
    let temp = parseInt(x.toString().split('').reverse().join(''))
    return temp > 2147483647 ? 0 : neg ? -temp : temp
};



let x = -153423646
console.log(reverse(x))

// 1534236469