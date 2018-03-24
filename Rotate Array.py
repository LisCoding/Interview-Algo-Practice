class Solution:
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        length=len(nums)
        k=k%length
        x=k
        while(x>0):
          nums.append(nums[length-x])
          x=x-1

        for x in range(length-k-1, -1, -1):
          nums[x+k]=nums[x]

        while(k>0):
          nums[k-1]=nums[length+k-1]
          k=k-1
        print(nums, length)

        del nums[length:]
        
        
obj=Solution()
obj.rotate([1,2,3,4,5,6,7,8,9,10],3)
        