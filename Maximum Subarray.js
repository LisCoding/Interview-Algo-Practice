var maxSubArray = function(nums) {
  var highestCount = nums[0];
  var Count = 0;
  for (let x = 0; x < nums.length; x++) {
    Count += nums[x];
    if (highestCount < Count) {
      console.log("hi")
      highestCount = Count;
    }
    if (Count < 0) {
      Count = 0;
    }
  }
  return highestCount
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))