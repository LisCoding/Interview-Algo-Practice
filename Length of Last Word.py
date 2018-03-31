class Solution:
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        
        length=len(s)
        if(length==0):
          print("O")
          return 0
        
        for x in range(length, 0, -1):
          if s[x-1]!= ' ':
            length=x
            break
        
        for i in range(length, 0, -1):
          if s[i-1]==' ':
            print("hi", length-i)
            return length-i
        print(length)
        return length

        

obj=Solution()
obj.lengthOfLastWord("asdfsd")