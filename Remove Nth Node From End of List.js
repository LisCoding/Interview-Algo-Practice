var removeNthFromEnd = function(head, n) {
    console.log(head)
    let Dog_runner = head;
    let Parent_runner = head;
    let temp = 0;
    while (temp < n) {
      if (Dog_runner.next) {
        Dog_runner = Dog_runner.next
      }
      else {
        return head.next
      }
      temp++
    }
    while (Dog_runner.next) {
      Parent_runner = Parent_runner.next;
      Dog_runner = Dog_runner.next;
    }
    Parent_runner.next = Parent_runner.next.next;
    return head
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);
head.next.next.next.next = new ListNode(50);

removeNthFromEnd(head, 4)