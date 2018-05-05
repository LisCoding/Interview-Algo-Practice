# import math

class Solution(object):
  def BubbleSort(self, list):
    for i in range(len(list)):
      for j in range(len(list)-1):
        if(list[j+1]>list[j]):
          list[j],list[j+1]=list[j+1],list[j]
    
    return list

obj=Solution()
print(obj.BubbleSort([1,2,3,4]))
