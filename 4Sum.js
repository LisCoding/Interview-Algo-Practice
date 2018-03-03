var fourSum = function(nums, target) {
    nums = nums.sort(function(a,b){return a-b});
    console.log(nums);
    let length = nums.length;
    if(length < 4){
      return [];
    }
    let array = [];
    let start = 0;
    while (start < length-3) {
      let end = length-1;
      while (end > start + 2) {
        let left = start + 1;
        let right = end - 1;
        while (left < right) {
          console.log(nums[start], nums[end], nums[left], nums[right])
          let temp = nums[start] + nums[end] + nums[left] + nums[right]
          if (temp == target) {
            array.push([nums[start], nums[end], nums[left], nums[right]]);
            while (nums[left] == nums[left+1]) {
              left++;
            }
            left++;
          }
          else if (temp < target) {
            left++;
          }
          else {
            right--;
          }
        }
        while (nums[end] == nums[end-1]) {
          end--;
        }
        end--;
      }
      while (nums[start] == nums[start+1]) {
        start++;
      }
      start++;
    }
    return array;
};

console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11))

