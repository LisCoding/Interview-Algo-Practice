# import math


class Solution(object):
	def SelectionSort(self, list):

		for i in range(len(list)):
		  loc=i
		  for j in range(i+1, len(list)):
		    if (list[loc] > list[j]):
		      loc=j
		  list[i],list[loc]=list[loc],list[i]
		return list


obj = Solution()
print(obj.SelectionSort([-1, -6, 10, 2, 34, 4, -1]))
