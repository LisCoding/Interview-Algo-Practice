var removeElement = function(nums, val) {
  var count = 0;
  var hold = 0;
  for (let i=0; i< nums.length; i++) {
    if(nums[i] !== val){
      nums[hold] = nums[i];
      hold++
    }
    else{
      count++
    }
  }
  return nums.length-count, nums;
};

console.log(removeElement([1,1,2],1))