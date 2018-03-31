class Solution(object):
    def reverseWordsUnpassed(self, s):
        """
        :type s: str
        :rtype: str
        """
        
        if s.isspace():
          print("hi")
          return s
        
        
        return ' '.join(s.split(' ')[::-1])
		
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        
        return ' '.join(x for x in s.split(' ')[::-1] if len(x) != 0)
        
        

obj=Solution()
print(obj.reverseWords("  th fg   "))