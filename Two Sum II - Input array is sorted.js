var twoSum = function(numbers, target) {
  
  let high = numbers.length-1;
  if (target===undefined || numbers.length<2 || target<numbers[high]) {
    return
  }
  
  let low = 0;
  
  while (low<=high) {
    if((numbers[low]+numbers[high])==target) {
      return [low+1, high+1]
    }
    else if((numbers[low]+numbers[high])<target) {
      low++;
      continue;
    }
    else {
      high--;
      continue;
    }
  }
};

console.log(twoSum([2,7,9,11],16))