'''
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Example 1:

Input: 11
Output: 3
Explanation: Integer 11 has binary representation 00000000000000000000000000001011 
Example 2:

Input: 128
Output: 1
Explanation: Integer 128 has binary representation 00000000000000000000000010000000
'''

class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        hammingWeight = 0

        for i in range(0 , 32):
          if(1<<i & n):
            hammingWeight += 1
        return hammingWeight
    
    def hammingWeight_two(self, n):

        b = bin(n)
        # Convert an integer number to a binary string.
        # Count the number of times '1' appears in that string
        return b.count("1")

my_obj = Solution()
print(my_obj.hammingWeight_two(128))
