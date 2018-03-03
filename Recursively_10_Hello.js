var Recursively_10_Hello = function(string, num=10) {
  console.log(string)
  if (num===0) {
    return
  }
  else {
    num--;
    return Recursively_10_Hello(string, num)
  }

};

Recursively_10_Hello("hello")