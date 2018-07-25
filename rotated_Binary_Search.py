'''
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
'''

class Solution:

    def N_search(self, nums, target):
      return nums.index(target)

    def binary_search(self, nums, target, left=0, right=None):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        if right == None:
          right = len(nums)-1
        if right == -1:
          return -1

        middle = (left+right)//2

        if nums[middle] == target:
          return middle
        elif left == right:
          return -1
        elif nums[middle] > target:
          return self.binary_search(nums, target, left, middle)
        else: 
          return self.binary_search(nums, target, middle+1, right)
    
    def rotated_search(self, nums, target, left=0, right=None, slide=None):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        if right == None:
          right = len(nums)-1
        if right == -1:
          return -1

        if slide == None:
          slide = self.better_slider(nums, left, right)
          print("slide by: ", slide)
        
        if nums[0] <= target and slide != -1:
          return self.binary_search(nums, target, 0, slide)
        return self.binary_search(nums, target, slide+1)

    def slider(self, nums, left=0, right=None):
        if nums[right] < nums[left]:
          temp = 0
          while nums[temp] < nums[temp+1]:
            temp += 1
          return temp
        return -1
    
    def better_slider(self, nums, left=0, right=None):

        mid = (left+right)//2
        
        if left == right:
          return -1
        if (nums[mid] > nums[mid-1] and nums[mid] > nums[mid+1]):
          return mid
        if (nums[left]>nums[mid]):
          return self.better_slider(nums, left, mid)
        return self.better_slider(nums, mid+1, right)

nums = [1,2,3,4];        
my_object = Solution()
print(my_object.rotated_search(nums, 1))
