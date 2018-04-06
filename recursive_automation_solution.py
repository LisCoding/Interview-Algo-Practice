class Solution(object):
    def fixClass(self, s, parent=None, grandparent=None, index=None):

        if(isinstance(s, dict)):
          for a,b in s.items():
            if(bool(b)):
              self.fixClass(b, a, s)
              
        elif(isinstance(s, list)):
          for i in range(len(s)):
            self.fixClass(s[i], s, parent, i)
          
        elif(isinstance(s, str)):
          pass
        
        elif(isinstance(s, int)):
          pass
        
        else:
          if(isinstance(grandparent, dict)):
            grandparent[parent]=s.__dict__
          elif(isinstance(grandparent, str)):
            parent[index]=s.__dict__
      
    
    
    
    
    
    
      
class Temp(object):
  pass
temp= Temp()
print(temp)
temp_sorted = temp.__dict__
print(temp_sorted)


a = {'pret': {}, 'test': {'verify': [{'param': {'intf': 'default', 'expected': {}, 'namebd': 'default', 'weight': 1, 'su_pr_flag': False, 'operation_name': 'Verifyoperation', 'skip_dut': {}, 'pw': 'default', 'group': 'default', 'keys': []}, 'retrieve_nan_domain': {'mobile': 'num3247', 'data': [{ 'id': '0', 'nan_domain': temp, 'action': 'none', 'list': [], 'state': 'high', 'group': 'Vip', 'aging': None, 'alist': [temp, temp], 'notification': 'systemprolog', }]}}]}, 'pt': {}}




print("start", a)

obj=Solution()
print(obj.fixClass(a))

print('end', a)