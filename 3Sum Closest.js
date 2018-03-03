var threeSumClosest = function(nums, target) {
    nums = nums.sort (function(a,b){return a-b})
    console.log(nums, Math.abs(0))
    if (nums.length < 3) {
      return 0;
    }
    let closest = nums[0] + nums[1] + nums[2];
    if(closest === target) {
      return target;
    }
    let start = 0;
    let length = nums.length-1
    while (start < length-1) {
      let left = start + 1;
      let right = length;
      while (left < right) {
        console.log(nums[start], nums[left], nums[right], nums[start] + nums[left] + nums[right], closest)
        let temp = nums[start] + nums[left] + nums[right]
        if(Math.abs(target - temp) < Math.abs(target - closest)) {
          closest = temp;
          if(closest === target) {
            return target;
          }
        }
        else if (temp < target) {
          left++;
        }
        else {
          right--;
        }
      }
      while (nums[start] === nums[start+1]) {
        start++;
      }
      start++;
    }
    return closest;
};

console.log(threeSumClosest([13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6], -59))