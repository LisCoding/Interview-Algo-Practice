var generate = function(numRows) {
    var arr = [[1],[1,1]];
    
    if(numRows===0 || numRows===undefined){
      return []
    }
    if(numRows==1){
      return [[1]];
    }
    
    for (let i=2; i<numRows; i++) {
      arr.push([1]);
      for (let j=0; j<arr[i-1].length-1;j++) {
        let x = arr[i-1][j]+arr[i-1][j+1]
        arr[i].push(x);
      }
      arr[i].push(1);
    }
    
    return arr
};



console.log(generate())

