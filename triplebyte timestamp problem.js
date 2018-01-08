var timer = function (interval, onLast, onFirst, wait, timestamp) {
  
  var result = [];
  
  if (onFirst) {
    result.push(timestamp[0]);  
  }
  if (onLast) {
    result.push(timestamp[timestamp.length-1]);
  }
  if (wait !== 0) {
    var max = result.length
    for (let x = 0; x < max; x++) {
      result.push(result[x]+wait);
    }
  }
  if (onLast && onFirst && interval !== 0) {
    for (let y = 0; y < timestamp.length; y++) {
      result.push(timestamp[y]+interval);
    }
  }

  return result.sort();
}





console.log(timer(20,true,false,20,[0,10,50]))


