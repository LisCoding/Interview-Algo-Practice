class Solution:
    def reverseWordsOld(self, s):
        """
        :type s: str
        :rtype: str
        """
        array=s.split(" ")
        print("array: ", array)
        
        for i in range(0,len(array)):
          temp=[]
          for j in range(len(array[i])-1, -1, -1):
            print("letter: ", array[i][j])
            temp.append(array[i][j])
          array[i]=''.join(temp)
          print("word: ", array[i])
        
        array=' '.join(array)
        print("final: ", array)
        return array
        
        
    def reverseWords(self, s):
    
        return ' '.join(word[::-1] for word in s.split(" ") )
      
    def reverseWordsOldTwo(self, s):
        
        array=s.split(" ")
        print("array: ", array)
        
        for i in range(0,len(array)):
          array[i]=array[i][::-1]
          print("word: ", array[i])
        
        array=' '.join(array)
        print("final: ", array)
        return array
        
        

obj=Solution()
print(obj.reverseWordsOldTwo("Let's take LeetCode contest"))