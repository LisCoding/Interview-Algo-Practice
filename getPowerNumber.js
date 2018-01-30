
function checkIfPowerNumber3(num){
    limit = parseInt(Math.sqrt(num))+1
    for (var x=2; x<limit; x++){
        b = Math.log(num)/Math.log(x);
        // console.log(b)
        b = precisionRound(b, 10) 
        if (b == parseInt(b)){
            return true
        }
    }
    return false
  }
  
  function precisionRound(number, precision) {
   var factor = Math.pow(10, precision);
   console.log("precision" , Math.round(number * factor) / factor);
   return Math.round(number * factor) / factor;
   
  }
  



  function getPowerNumber(index){
    var list_nums = []
    var start = 4
    while ((list_nums.length) != index+1) {
        if (checkIfPowerNumber3(start)){
            list_nums.push(start)
        }
        start+=1
    }  
    // console.log(list_nums)
    return list_nums[index]
    
  }
  console.log(getPowerNumber(2))