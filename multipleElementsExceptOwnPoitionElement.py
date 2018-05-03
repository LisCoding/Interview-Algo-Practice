# import math

class Solution(object):
  def multipleElementsExceptOwnPoitionElement(self, list):
    if not (len(list)):
      return list
        
    total=1
    for i in list:
  	   total*=i
  	
    newList=[]
    for j in list:
  	  newList.append(total//j)
    
    return newList

obj=Solution()
print(obj.multipleElementsExceptOwnPoitionElement([1,2,3,4]))

# print(singleDigit(100))