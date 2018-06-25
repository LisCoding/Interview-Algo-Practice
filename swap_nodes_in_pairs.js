
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let x = new ListNode(1);
x.next = new ListNode(2);
x.next.next = new ListNode(3);
// x.next.next.next = new ListNode(4);
// x.next.next.next.next = new ListNode(5);
// x.next.next.next.next.next = new ListNode(6);

// (1) - (2) - (3) - (4)
// (2) - (1) - (3) - (4)
// (2) - (1) - (4) - (3)




var swapPairs = function(head) {
    
    let runner_one = head;
    if (runner_one && runner_one.next)
      head = runner_one.next;
    let runner_two;
    let runner_three;
    
    while(runner_one && runner_one.next){
      if (runner_one.next)
        runner_two = runner_one.next;
      if (runner_three)
        runner_three.next = runner_two;
      runner_one.next = runner_two.next;
      runner_two.next = runner_one;

      runner_three = runner_one;
      runner_one = runner_one.next;
      
      // console.log(runner_one)
    }
    return head
};

var swapPairs_NotMine = function(head) {
    if(head === null || head.next===null)
        return head;
    var res = head.next;
    head.next = swapPairs(head.next.next);
    res.next = head;
    return res;
};

console.log(swapPairs(x))
// console.log(x)
