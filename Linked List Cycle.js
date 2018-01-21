function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
var p = new ListNode(10)
p.next = new ListNode(20)
// p.next.next = new ListNode(30)
// p.next.next.next = p

// console.log(p)

var hasCycleSet = function(head) {
    if(!head || !head.next) {
      return false;
    }
    let dict = new Set();
    let temp = head
    
    while (head) {
      if (dict.has(head)) {
        return true;
      }
      dict.add(head);
      head = head.next;
    }
    return false;
};

console.log(hasCycleSet(p))

var hasCycle = function(head) {
  if(!head || !head.next) {
    return false;
  }
  let single = head;
  let ahead = head.next;
  
  while (single && ahead) {
    if (single === ahead) {
      return true;
    }
    single = single.next;
    ahead = ahead.next;
    if (!ahead) {
      return false;
    }
    else {
      ahead = ahead.next;
    }
  }
  return false;
}

console.log(hasCycle(p))