var climbStairs = function(n) {
    var memo = [],
        i;

    memo[0] = 0;    
    memo[1] = 1;
    memo[2] = 2;
    
    for(i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
};

console.log(climbStairs(5))