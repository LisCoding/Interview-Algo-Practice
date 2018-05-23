import hashlib # imports the md5 module to generate a hash
password = "1234"
# encrypt the password we provided as 32 character string
hashed_password = hashlib.new(password).hexdigest()
print(hashed_password) #this will show you the hashed value
# 5f4dcc3b5aa765d61d8327deb8	82cf99 -> nice!
