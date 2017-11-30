var removeDuplicates = function(nums) {
  var count = 0;
  var hold = 0;
  for (let i=0; i< nums.length; i++) {
    if(nums[i] !== nums[i+1]){
      nums[hold] = nums[i];
      hold++
    }
    else{
      count++
    }
  }
  return nums.length-count, nums;
};

console.log(removeDuplicates([1,1,2]))