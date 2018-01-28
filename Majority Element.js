var majorityElement = function(nums) {
    var dict = {};
    var major = Math.floor(nums.length/2);
    
    for (let i=0; i<nums.length; i++) {
      if (nums[i] in dict) {
        dict[nums[i]]++;
      }
      else {
        dict[nums[i]] = 1;
      }
      if( dict[nums[i]] > major ){
          return nums[i];
      }
    }
    return null;
};

var p = [1,2,3,4,2,2,2]
console.log(majorityElement(p))