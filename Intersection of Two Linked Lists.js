function ListNode(val) {
    this.val = val;
    this.next = null;
}

// A:          a1 → a2
//                   ↘
//                     c1 → c2 → c3
//                   ↗            
// B:     b1 → b2 → b3

var c = new ListNode(10);
c.next = new ListNode(20);
c.next.next = new ListNode(30);

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = c;

var b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(7);
b.next.next.next = c;

var getIntersectionNode = function(headA, headB) {
    
    let store = new Set();
    let tempA = headA;
    let tempB = headB;
    
    while (tempA || tempB) {
      if(store.has(tempA)) {
        return tempA;
      }
      if(tempA) {
        store.add(tempA);
        tempA = tempA.next;
      }
      if (store.has(tempB)) {
        return tempB;
      }
      if (tempB) {
        store.add(tempB);
        tempB = tempB.next;
      }
    }
    return null;
};



console.log(getIntersectionNode(a,b))