# import math


class Solution(object):
	def MergeSort(self, list):
	  if len(list)==1:
	    return list
	  mid = (len(list)//2)
	  left = self.MergeSort(list[:mid])
	  right = self.MergeSort(list[mid:])
	 # import pdb;pdb.set_trace()
	  i,j,k=0,0,0
	  while(i<len(left) and j<len(right)):
	   # import pdb;pdb.set_trace() 
	    if left[i] < right[j]:
	      list[k] = left[i]
	      i+=1
	      k+=1
	    else:
	      list[k] = right[j]
	      j+=1
	      k+=1
	      
	  while(i<len(left)):
	    list[k]=left[i]
	    i+=1
	    k+=1
	  while(j<len(right)):
	    list[k]=right[j]
	    j+=1
	    k+=1
	   
	 # import pdb;pdb.set_trace()   
	  return list


obj = Solution()
print(obj.MergeSort([10, -6, 20, 2, 34, 4, -10]))
