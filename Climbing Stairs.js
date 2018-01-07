var climbStairsTrial = function(n) {
    if (n < 4) {
      return n;
    }
    var count = n;
    var end = count-3;
    var tempEnd = end;
    var threes = 0;
    while (end > 0) {
      console.log(threes)
      if (threes > 0) {
        console.log("hi", end, tempEnd)
        var step = end;
        while (step > 0) {
          while (tempEnd > 0) {
            count += tempEnd;
            tempEnd--;
          }
          step--;
          tempEnd = step;
          console.log("hi", end, tempEnd, step)
        }
        end -= 2;
        tempEnd = end;
      }
      else{
        while (tempEnd > 0) {
          count += tempEnd;
          tempEnd--;
        }
        console.log(count)
        end -= 2;
        tempEnd = end;
        threes++
      }
      
    }
    return count;
    
};

var climbStairs = function(n) {
  var total = 1;
  var previous = 0;
  while (n > 0) {
    total += previous;
    previous = total - previous;
    n--;
    console.log(total, previous)
  }
  return total;
}



1 - 1; - 1

1 - 1
2 - 1+1; - 2

1 - 1 - 1
3 - 1+2; - 3

1 - 1 - 1 - 1
4 - 1+3+(1); - 5

1 - 1 - 1 - 1 - 1
5 - 1+4+(2+1); - 8

1 - 1 - 1 - 1 - 1 - 1
6 - 1+5+(3+2+1)+(1) - 13

1 - 1 - 1 - 1 - 1 - 1 - 1
7 - 1+6+(4+3+2+1)+
(2+1+(1)) - 21

1 - 1 - 1 - 1 - 1 - 1 - 1 - 1
8 - 1+7+(5+4+3+2+1)+
(3+2+1+(2+1)+(1))+(1) - 34

1 - 1 - 1 - 1 - 1 - 1 - 1 - 1 - 1
9 - 1+8+(6+5+4+3+2+1)+
(4+3+2+1+(3+2+1)+(2+1)+(1))+
((2+1)+(1)+(1)) - 55

1 - 1 - 1 - 1 - 1 - 1 - 1 - 1 - 1 - 1
10 - 1+9+(7+6+5+4+3+2+1)+
((5+4+3+2+1)+(4+3+2+1)+(3+2+1)+(2+1)+(1))+
((3+2+1)+(2+1)+(1)+((2+1)+(1))+(1))+
(1) - 89

console.log(climbStairs(9))