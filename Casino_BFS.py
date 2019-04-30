# // inputs - k(max number of all ins allowed, (all ins should be less than k)), total chips(to get out of the game)

# // output: find the least number of rounds to get to the total chips

# // rules:
# // only put 1 chip or put all ins
# // he gets back double all the time
# // he cant porposefully loose chips

# stack = list()
# stack.append(1)
# stack.append(2)
# stack.append(3)

# print stack.pop(0)  #1
# print stack.pop(0)  #2
# print stack.pop(0)  #3

def quick_money(k, max_chips, turns=1, stack=[[2,0]], total_iterations=0):

  if max_chips == 1:
    return 0

  turns += 1
  size = len(stack)
  # total_iterations += size

  while size:
    total_iterations += 1
    chips = stack.pop(0)
    if max_chips == chips[0]:
      return {'turns': turns, 'allins': chips[1], 'total_iterations': total_iterations}

    stack.append([chips[0]+1, chips[1]])
    if chips[1] < k-1:
      stack.append([chips[0]+chips[0], chips[1]+1])
    size -= 1

  print(stack)
  return quick_money(k, max_chips, turns, stack, total_iterations)

print(quick_money(5,75))

# [[3, 0], [4, 1]]
# [[4, 0], [6, 1], [5, 1], [8, 2]]
# [[5, 0], [8, 1], [7, 1], [12, 2], [6, 1], [10, 2], [9, 2], [16, 3]]
# [[6, 0], [10, 1], [9, 1], [16, 2], [8, 1], [14, 2], [13,2], [24, 3], [7, 1], [12, 2], [11, 2], [20, 3], [10, 2],[18, 3], [17, 3], [32, 4]]
# {'turns': 6, 'allins': 3} ~ 22 turns

def quick_money_reverse(k, max_chips, turns=0, stack=None, total_iterations=0):

  if max_chips == 1:
    return turns

  if stack==None:
    stack = [[max_chips, 0]]

  turns += 1
  size = len(stack)
  # total_iterations += size

  while size:
    total_iterations += 1
    chips = stack.pop(0)
    if chips[0] == 2:
      return {'turns': turns+1, 'allins': chips[1], 'total_iterations': total_iterations}

    stack.append([chips[0]-1, chips[1]])
    if chips[0]%2 == 0 and chips[1] < k-1:
      stack.append([chips[0]/2, chips[1]+1])
    size -= 1

  print(stack)
  return quick_money_reverse(k, max_chips, turns, stack, total_iterations)

print(quick_money_reverse(5,75))

# [[23, 0], [12.0, 1]]
# [[22, 0], [11.0, 1], [6.0, 2]]
# [[21, 0], [11.0, 1], [10.0, 1], [5.0, 2], [3.0, 3]]
# [[20, 0], [10.0, 1], [9.0, 1], [5.0, 2], [4.0, 2], [2.0,3]]
# {'turns': 6, 'allins': 3} ~ 16 turns
