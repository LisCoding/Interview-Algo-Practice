function ListNode(val) {
    this.val = val;
    this.next = null;
}


var mergeTwoLists = function(l1, l2) {
    var L3 = new ListNode(0);
    var runner = L3;
    
    
    while (l1 && l2) {
    console.log(l1.val)
    console.log(l2.val)
      if(l1.val < l2.val) {
        runner.next = new ListNode(l1.val);
        runner = runner.next;
        l1 = l1.next;
      }
      else{
        runner.next = new ListNode(l2.val);
        runner = runner.next;
        l2 = l2.next;
      }
    }
    while (l1 || l2) {
      if(l1) {
        runner.next = new ListNode(l1.val);
        runner = runner.next;
        l1 = l1.next;
      }
      else {
        runner.next = new ListNode(l2.val);
        runner = runner.next;
        l2 = l2.next;
      }
    }
    return L3.next;
};


var l1 = new ListNode(3);
l1.next = new ListNode(7);
l1.next.next = new ListNode(10);
l1.next.next.next = new ListNode(12);

// console.log(l1)

var l2 = new ListNode(1);
l2.next = new ListNode(5);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(11);

console.log(mergeTwoLists(l1,l2))




