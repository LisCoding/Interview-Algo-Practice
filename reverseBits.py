'''
Reverse bits of a given 32 bits unsigned integer.

Example:

Input: 43261596
Output: 964176192

Explanation: 43261596 represented in binary as 00000010100101000001111010011100, 
return 964176192 represented in binary as 00111001011110000010100101000000.

1100
0011
'''

class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
      new_var = 0
      
      for i in range(31, -1, -1):
        # move i from 31 to 0 decrementing by 1


        '''
        x << y
        Returns x with the bits shifted to the left by y places (and new bits on the right-hand-side are zeros). This is the same as multiplying x by 2**y.
        
        x & y
        Does a "bitwise and". Each bit of the output is 1 if the corresponding bit of x AND of y is 1, otherwise it's 0.
        '''


        if (1<<i) & n:
          '''
        result = (1<<i) 
        For example:
         if i = 5 then result = '100000' in binary (and 32 in int).
         if i = 6 then result = '1000000' in binary (and 64 in int).. etc

        result_two = result & n
        For example:
          result =        10011 ---->(19 in int)
          n      =          100 ---->(4 in int)
          Then result_two = 000 ---->(0 in int) --> bool False.
        
          result =        10100 ---->(20 in int)
          n      =          100 ---->(4 in int)
          Then result_two = 100 ---->(4 in int) --> bool True.


          if n in binary is 010011100:
            The for-loop and (1<<i) will create:
                                        100000000
                                        10000000
                                        1000000
                                        100000
                                        10000
                                        1000
                                        100
                                        10
                                        0
            Then (1<<i) & n will create:
                                        0         -->False
                                        10000000  -->True
                                        0         -->False ..etc
                                        0
                                        10000
                                        1000
                                        100
                                        0
                                        0
        '''
          

          new_var ^= 1<<(31-i)
          # new = new ^ 1<<(31-i)

          '''
          x ^ y
          Does a "bitwise exclusive or". Each bit of the output is the same as the corresponding bit in x if that bit in y is 0, and it's the complement of the bit in x if that bit in y is 1.
          '''

          # Basically inserts '1' whenever it hits the if statement.

          '''
          if n in binary is 010011100:

            Then (1<<i) & n will create:
                                        0         -->False
                                        10000000  -->True
                                        0         -->False ..etc
                                        0
                                        10000
                                        1000
                                        100
                                        0
                                        0
            
            Then new_var will get updated like this:
                                         0
                                         10
                                         10
                                         10
                                         10010
                                         110010
                                         1110010
                                         01110010
                                         001110010
          '''

          
      return new_var

my_obj = Solution()
print(my_obj.reverseBits(43261596))
