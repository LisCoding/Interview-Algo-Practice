var addBinary = function(a, b) {
  var c = [];
  var carry = false;
  var y = b.length-1;
  var x = a.length-1;
  while (y>-1 || x>-1) {
    if (a[x] == "1" && b[y] == "1" && carry){
      c.push(1);
      carry = true;
      console.log("hi")
    }
    else if ((a[x] == "1" && b[y] == "1") || (a[x] == "1" && carry) || (carry && b[y] == "1")){
      c.push(0);
      carry = true;
      console.log("hiii", x)
    }
    else if ((a[x] == "1") || (b[y] == "1") || carry) {
      c.push(1);
      carry = false;
    }
    else {
      c.push(0);
    }
    console.log("biii", a[x], b[y])
    y--;
    x--;
  }
  if (carry) {
    c.push(1)
  }
  c.reverse()
  d = c.join("")
  return d
};

console.log(addBinary("10001", "11101"))