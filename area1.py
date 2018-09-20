# Enter your code here. Read input from STDIN. Print output to STDOUT

# Print out the odd numbers between 0 and 100

"""
def odd():
    for i in range(0,100):
        if i % 2 == 1:
            print(i)

odd()
"""

# Check Sudoku Boards
#
# By definition a Sudoku board is 9 x 9
# A complete row is a row with all integers between 1 and 9
# The same is true for a column, and a box
# A board is correctly solved if all rows, columns, and boxes are complete

def checktotal(n):
    return n == 45


def check_sudoku(grid):
    # Input: grid (two by two array)
    # Output: True if grid is correctly solved, False otherwise
    
    for j in range(9):
        row = 0
        col = 0
        for i in range(9):
            row += grid[j][i]
            col += grid[i][j]
        if row != 45 or col != 45:
            return False
        
    for x in range(0,9,3):
        box = 0
        for y in range(0,9,3):
            box = grid[x][y]+grid[x][y+1]+grid[x][y+2]+grid[x+1][y]+grid[x+1][y+1]+grid[x+1][y+2]+grid[x+2][y]+grid[x+2][y+1]+grid[x+2][y+2]
            if box != 45:
                return False
        
    return True
    
    

good_grid = [
[1,4,7,2,5,8,3,6,9],
[2,5,8,3,6,9,4,7,1],
[3,6,9,4,7,1,5,8,2],
[4,7,1,5,8,2,6,9,3],
[5,8,2,6,9,3,7,1,4],
[6,9,3,7,1,4,8,2,5],
[7,1,4,8,2,5,9,3,6],
[8,2,5,9,3,6,1,4,7],
[9,3,6,1,4,7,2,5,8]]

    
bad_grid_1 = [
[1,2,3,4,5,6,7,8,9],
[1,3,4,5,6,7,8,9,1],
[3,4,5,6,7,8,9,1,2],
[4,5,6,7,8,9,1,2,3],
[5,6,7,8,9,1,2,3,4],
[6,7,8,9,1,2,3,4,5],
[7,8,9,1,2,3,4,5,6],
[8,9,1,2,3,4,5,6,7],
[9,1,2,3,4,5,6,7,8]]

    
bad_grid_2 = [
[1,1,3,4,5,6,7,8,9],
[2,3,4,5,6,7,8,9,1],
[3,4,5,6,7,8,9,1,2],
[4,5,6,7,8,9,1,2,3],
[5,6,7,8,9,1,2,3,4],
[6,7,8,9,1,2,3,4,5],
[7,8,9,1,2,3,4,5,6],
[8,9,1,2,3,4,5,6,7],
[9,1,2,3,4,5,6,7,8]]
        
        
print(check_sudoku(good_grid))    
print(check_sudoku(bad_grid_1))    

print(check_sudoku(bad_grid_2)) 