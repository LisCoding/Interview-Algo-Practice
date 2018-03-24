var rotate = function(nums, k) {
  
  let length=nums.length-1;
  let temp=length
  let x=0;
  while(x<k) {
    nums[temp+k]=nums[temp]
    temp--;
    x++
  }
  
  for (let i=length; i>=k; i--) {
    nums[i]=nums[i-k]
  }  
  
  let y=0;
  let h=k;
  while(y<h){
    nums[k-1]=nums[length+k]
    
    y++
    k--
  }
  nums.length=length+1
};