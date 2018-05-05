import datetime


class Solution(object):
	def InsertionSort(self, list):
	  currentTime=datetime.datetime.now()
	 # count=0
	  for i in range(1, len(list)):
		  for j in range(i, 0, -1):
		    # count+=1
		    if(list[j] < list[j-1]):
		      list[j],list[j-1]=list[j-1],list[j]
		    else:
		      break
		  # print(count)
	  return list


obj = Solution()
print(obj.InsertionSort([10, -6, 10, 2, 34, 4, -10]))
