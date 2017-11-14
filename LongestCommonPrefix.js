function LongPrefix(array) {
  var prefix = '';
  var endLoop = true;
  var j = 0;
  while (endLoop) {
    for (let i=0; i<array.length; i++){
      if (!(array[i][j])){
        return prefix;
      }
      if (array[i][j] != array[0][j]){
        return prefix;
      }
    }
    prefix = prefix + array[0][j];
    j++;
  }
}

console.log(LongPrefix(["abc","abcd","abd"]))