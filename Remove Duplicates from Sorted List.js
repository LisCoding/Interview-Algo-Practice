function ListNode(val) {
    this.val = val;
    this.next = null;
}

var s = new ListNode(1)
s.next = new ListNode(1)
s.next.next = new ListNode(2)

console.log(s)


var deleteDuplicatesCreateNewList = function(head) {
  if (!head) {
    return []
  }
  var newList = new ListNode(head.val);
  var temp = newList;
  while (head.next) {
    if (head.next.val != temp.val) {
      temp.next = new ListNode(head.next.val);
      temp = temp.next;
    }
    head = head.next;
  }
  return newList;
};

// console.log(deleteDuplicatesCreateNewList(s))

var deleteDuplicates = function(head) {
  if (!head) {
    return []
  }
  var newList = head;
  var temp = head;
  
  while (head.next) {
    console.log(head.next.val, temp.val)
    if (head.next.val != temp.val) {
      temp.next.val = head.next.val;
      temp = temp.next;
    }
    head = head.next;
  }
  temp.next = null;
  return newList;
};

console.log(deleteDuplicates(s))
 
 