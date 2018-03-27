class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        sortedList=[]
        if(len(nums)<3):
          return sortedList
        
        
        for x in range(0,len(nums)):
          sortedList.append(nums[x])
          
        sortedList.sort()
        print(nums, sortedList)
        
        returnList=[]
        length=len(sortedList)
        i=0
        # import pdb;pdb.set_trace()
        while((i<length-2) & (sortedList[i]<=0)):
          j=length-1
          # print("sdf", sortedList[i], sortedList[j])
          while((j>i+1) & (sortedList[j]>=0)):
            print("i,j: ", sortedList[i],sortedList[j])
            if(sortedList[i]+sortedList[j]>0):
              k=i+1
              print("k: ", sortedList[k])
              while(sortedList[i]+sortedList[j]+sortedList[k] <= 0):
                if(sortedList[i]+sortedList[j]+sortedList[k] == 0):
                  returnList.append([sortedList[i], sortedList[j], sortedList[k]])
                  
                  break
                k=k+1
            else:
              k=j-1
              print("k: ", sortedList[k])
              while(sortedList[i]+sortedList[j]+sortedList[k] >= 0):
                if(sortedList[i]+sortedList[j]+sortedList[k] == 0):
                  returnList.append([sortedList[i], sortedList[j], sortedList[k]])
                  print("hi", returnList)
                  break
                k=k-1
            print(j)
            while((j>i+1) & (sortedList[j]==sortedList[j-1])):
              j=j-1
            j=j-1
          while((i<length-2) & (sortedList[i]==sortedList[i+1])):
            i=i+1
          i=i+1  
            
        print(returnList)
        return 
        
        
        
        
obj=Solution()
obj.threeSum([0,0,0])
        
		
		
		------------------------------------------------------------------------------------------
class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        length=len(nums)
        
        array=[]
        i=0
        while(nums[i]<1):
          if((nums[i]==nums[i-1]) | (nums[i]+nums[length-1]+nums[length-2]<0)):
            i=i+i
            continue
          j=length-1
          k=i+1
          while(j>k):
            if(nums[i]+nums[j]+nums[k]==0):
              array.append([nums[i], nums[j], nums[k]])
              k=k+1
              j=j-1
              while(nums[k]==nums[k-1]):
                k=k+1
            elif(nums[i]+nums[j]+nums[k]<0):
              k=k+1
            else:
              j=j-1
          i=i+1
        return array