import math
# def checkIfPowerNumber(num):
#     limit = int(math.sqrt(num))+1
#     for x in xrange(2,limit):
#         p = x
#         while p <= num:
#             p = p * x
#             if p == num:
#                 return True
#     return False       
 
# def checkIfPowerNumber2(num):
#     limit = int(math.sqrt(num))+1
#     for x in xrange(2,limit):
#         b = math.floor(num**(1/float(x)))
#         # print 1/float(num),b
#         if b**x == num:
#             return True
#     return False


def check(num):
    limit = int(math.sqrt(num))+1
    for x in xrange(2,limit):
        b = math.log(num,x)
        if b == int(b):
        	return True
    return False    
 
def getPowerNumber(index):
    listNums = []
    start = 4
    while len(listNums) != index+1:
        if check(start):
            # print start
            listNums.append(start)
        start+=1
    # print start   
    return listNums[index]
 
print getPowerNumber(10)
