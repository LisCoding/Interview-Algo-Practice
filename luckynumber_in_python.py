import math

class Solution(object):
  def singleDigit(self, num):
  
  	if(num<10):
  	  return num
  
  	temp=1
  	while(num>0):
  	  temp*=num%10
  	  num=math.floor(num/10)
  
  	return self.singleDigit(temp)


obj=Solution()
print(obj.singleDigit(99))

# print(singleDigit(100))