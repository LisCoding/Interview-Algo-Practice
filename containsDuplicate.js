var containsDuplicate = function(nums) {
    
    nums.sort(nums)
    
    // console.log(nums)
    
    for(var i=0; i<nums.length-1; i++) {
        if(nums[i] == nums[i+1]) {
            return true
        }
        
    }
    return false
};

console.log(containsDuplicate([1,2,2]))