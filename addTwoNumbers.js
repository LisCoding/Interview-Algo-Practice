/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let runner_one = l1
    let runner_two = l2
    let l3 = new ListNode(null)
    let runner_three = l3
    
    carry = false
    while(runner_one || runner_two){
      
      total = 0
      if (runner_one){
        total += runner_one.val
        runner_one = runner_one.next
      }
      if (runner_two){
        total += runner_two.val
        runner_two = runner_two.next
      }
      if (carry){
        total += 1
        carry = false
      }
      if (total>9){
        total = total%10
        carry = true
      }
      runner_three.next = new ListNode(total)
      runner_three = runner_three.next
    }
    
    if (carry) {
      runner_three.next = new ListNode(1)
    }
    
    return l3.next
};