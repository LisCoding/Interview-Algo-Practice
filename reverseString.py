# Example 1:

# Input: "hello"
# Output: "olleh"
# Example 2:

# Input: "A man, a plan, a canal: Panama"
# Output: "amanaP :lanac a ,nalp a ,nam A"

input1 = "hello"
input2 = "A man, a plan, a canal: Panama"

class Solution:
    def reverseString(self, s):
        """
        :type s: str
        :rtype: str
        """
        # length = len(s)
        # half = length//2
        # n = 0
        # s = list(s)

        # while n < half:
        #   s[n],s[length-n-1] = s[length-n-1],s[n]
        #   n += 1
        

        # return ''.join(s)

        return s[::-1]




obj = Solution()
print(obj.reverseString(input2))
