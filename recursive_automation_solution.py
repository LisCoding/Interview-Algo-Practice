class Solution(object):
    def fixClass(self, s, parent=None, grandparent=None, index=None, parent_index=None):

        if(isinstance(s, dict)):
          for a,b in s.items():
            if(bool(b)):
              self.fixClass(b, a, s)
              
        elif(isinstance(s, list)):
          for i in range(len(s)):
            if(index!=None):
              self.fixClass(s[i], s, parent, i, index)
            else:
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
          elif(isinstance(grandparent, list)):
            grandparent[parent_index][index]=s.__dict__
          else:
            print("Need to update fixClass Method with further edge cases")
      
    
    
    
    
    
    
      
class Temp(object):
  pass
temp= Temp()
print(temp)
temp_sorted = temp.__dict__
print(temp_sorted)


argu = {'pret': {}, 'test': {'verify': [{'param': {'intf': 'default', 'expected': {}, 'namebd': 'default', 'weight': 1, 'su_pr_flag': False, 'operation_name': 'Verifyoperation', 'skip_dut': {}, 'pw': 'default', 'group': 'default', 'keys': []}, 'retrieve_nan_domain': {'mobile': 'num3247', 'data': [{ 'id': '0', 'nan_domain': temp, 'action': 'none', 'list': [], 'state': 'high', 'group': 'Vip', 'aging': None, 'alist': [temp, [[[temp, {'mad': temp}]]]], 'notification': 'systemprolog', }]}}]}, 'pt': {}}




print("start", argu)

obj=Solution()
print(obj.fixClass(argu))

print('end', argu)