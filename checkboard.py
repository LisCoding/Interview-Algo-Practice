def checkboard(x=8):
	star = True
	temp = x
	while x>0:
	  myArray = []
	  for _ in range(temp):
	    if(star):
	      myArray.append('*')
	    else:
	      myArray.append('-')
	    star = not star
	  print(''.join(myArray))
	  x -= 1
	  star = not star
	    
	    
checkboard(10)