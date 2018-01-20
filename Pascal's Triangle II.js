var getRow = function(rowIndex) {
    var arr = [[1],[1,1]];
    
    if(rowIndex===undefined){
      return []
    }
    if(rowIndex===0){
      return [1];
    }
    
    for (let i=2; i<=rowIndex; i++) {
      arr.push([1]);
      for (let j=0; j<arr[i-1].length-1;j++) {
        let x = arr[i-1][j]+arr[i-1][j+1]
        arr[i].push(x);
      }
      arr[i].push(1);
    }
    
    return arr[rowIndex]
};    



console.log(getRow(14))


// [1,(15-1),((15-2)!), (15-3)*+(15-3-2)*+(15-3-2-2)*...., (15-4) ]

// 4 =  1*1
// 5 =  2*2
// 6 =  3*3+1*1
// 7 =  4*4+2*2
// 8 =  5*5+3*3+1*1
// 9 =  6*6+4*4+2*2
// 10 = 7*7+5*5+3*3+1*1
// 11 = 8*15
// 12 = 9*18.33
// 13 = 10*22
// 14 = 11*26
