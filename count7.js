var count7 = function (num, count=0) {
  if (!num) {
    return count;
  }
  if (num < 0) {
    num *= -1;
  }
  if (num%10 === 7) {
    count++;
  }
  if (num === 0) {
    return count;
  }
  return count + count7(Math.floor(num/10))
}

console.log(count7(-178237))