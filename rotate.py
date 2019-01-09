# Given input matrix = 
# [
#   [1,2,3],
#   [4,5,6],
#   [7,8,9]
# ],

[1,2]
[[1,2],[3,4]]
# [[[1,2],[3,4]],[[1,2],[3,4]],[[1,2],[3,4]]]

# rotate the input matrix in-place such that it becomes:
# [
#   [7,4,1],
#   [8,5,2],
#   [9,6,3]
# ]

matrix = [[1,2,3],[4,5,6],[7,8,9]]

# i,j - (length-1-j),i
0,0 - 2,0 
0,1 - 1,0
0,2 - 0,0 - 2,0

1,0 - 2,1 
1,1 - 1,1
1,2 - 2,1 

2,0 - 2,2 
2,1 - 1,2 - 2,1
2,2 - 0,2 - 2,2

# i,j - j,(length-i-1)
# i,j - j,(length-i-1)
0,0 - 0,2
0,1 - 1,2
0,2 - 2,2

1,0 - 0,1
1,1 - 1,1
1,2 - 2,1

2,0 - 0,0
2,1 - 1,0
2,2 - 2,0

matrix2 = [[ 5, 1, 9,11],[ 2, 4, 8,10],[13, 3, 6, 7],[15,14,12,16]]

class Solution:
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.
        """

        length = len(matrix)
        xlength = length//2

        for x in range(0,xlength):
          for y in range(x,length-1-x):
 
            temp = matrix[x][y]

            matrix[x][y] = matrix[length-1-y][x]
            matrix[length-1-y][x] = matrix[length-1-x][length-1-y]
            matrix[length-1-x][length-1-y] = matrix[y][length-1-x]
            matrix[y][length-1-x] = temp
        return matrix

        

[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

temp = 1




obj = Solution()
print(obj.rotate(matrix2))





        
