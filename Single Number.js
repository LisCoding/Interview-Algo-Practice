var singleNumber = function(nums) {
    if(!nums.length) {
      return
    }
    var dict = {}

    for (let i=0; i<nums.length; i++) {
      if(nums[i] in dict) {
        let temp = nums[i].toString();
        delete dict[nums[i]];
      }
      else {
        dict[nums[i]] = true;
      }
    }
    return Number(Object.keys(dict)[0])
    
};

console.log(singleNumber([4,7,4,9,7,9,6]))

