# class Solution(object):
def findcommon(a, b):

	tempDict = {}

	for i in range(0, len(a)):
		tempDict[a[i]] = 1

	# print(dict)

	for j in range(0, len(b)):
		if (b[j]) in tempDict:
			print(b[j])

	return

	# input: abc, bcd
	# output: bc


# obj=Solution()
print(findcommon('abc', 'abd'))
