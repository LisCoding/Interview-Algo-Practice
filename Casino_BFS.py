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

def quick_money(k, max_chips, turns=0, stack=[[2,0]]):

  if max_chips == 1:
    return turns
  # if max_chips < stack[0]:
  #   return null

  turns += 1
  size = len(stack)

  while size:
    chips = stack.pop(0)
    if max_chips == chips[0]:
      return turns
    stack.append([chips[0]+1, chips[1]])
    if chips[1] < k-1:
      stack.append([chips[0]+chips[0], chips[1]+1])
    size -= 1

  print(stack)
  return quick_money(k, max_chips, turns, stack)

print(quick_money(3,16))