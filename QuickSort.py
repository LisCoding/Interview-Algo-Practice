import math


class Solution(object):
	def QuickSort(self, list, left=0,right=math.inf):
	  
	  if right==math.inf:
	    right = len(list)-1
	    
	  if left < right:
	    result = self.partition(list, left, right)
	    self.QuickSort(list, left, result)
	    self.QuickSort(list, result+1, right)

	 # import pdb;pdb.set_trace() 
	 
	 
	  return list
	 
	def partition(self, list, left, right):

	  pivot = list[left]
	  
	  while (right>left):
	    while (left<=right and list[left] <= list[pivot]):
	      left+=1
	    while (list[right] > list[pivot]):
	      right-=1
	      
	    if (right>left):
	      list[left], list[right] = list[right], list[left]
	      left+=1
	      right-=1
	      
	  if (list[right] < list[pivot]):
	    list[right], list[pivot] = list[pivot], list[right]
	  print('bye', list, left, right, pivot)
	    
	  return right
	  


obj = Solution()
a= [10, -6, 20, 2, 34, 4, -10, 12, 38, -2, -12, 0]
b= [10, -6, 20]
c= [10, 20, -6]
d= [10, 20]
e= [10, -6]
print(obj.QuickSort(a))
