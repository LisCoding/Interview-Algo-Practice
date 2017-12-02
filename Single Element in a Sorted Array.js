var singleNonDuplicate = function(nums) {
  if (nums[0] != nums[1]) {
    return nums[0];
  }  
  
  if (nums[nums.length-1] != nums[nums.length-2]) {
    return nums[nums.length-1];
  }
  var start = 0;
  var end = nums.length;
  var runner;
  while(true) {
  runner = Math.floor((end + start)/2);
  console.log(runner)
    if(nums[runner] != nums[runner+1] && nums[runner] != nums[runner-1]) {
      return nums[runner];
    }
    if(nums[runner] == nums[runner+1]){
      if(((runner - start - 1) % 2) !== 0){
        start = runner;
      console.log("if,if", start, end)
      } else {
        end = runner - 1;
        console.log("if,else", start, end)
      }
    }
    else {
      if(((runner - start + 1) % 2) !== 0){
        end = runner;
        console.log("else, if", start, end)
      } else {
        start = runner + 1;
        console.log("else,else", start, end)
      }
    }
  }
  
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11]))