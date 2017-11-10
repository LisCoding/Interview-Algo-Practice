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
    var resudial = 0;
    var runner1 = l1
    var runner2 = l2

    var result = new ListNode(0);
    var runner3 = result
    while(runner1 || runner2){
    	var value;
    	if(!runner2){
    		value = runner1.val + resudial;
    	}
    		else if(!runner1){
    		 value = runner2.val + resudial;
    	} else {
    		 value = runner1.val + runner2.val + resudial; //10
    	}

        if(value >= 10){
        	var mod = value % 10; //0
            resudial = 1;
            value = mod;
        }

        else {
            resudial = 0
        }

        runner3.val = value
        if(!runner2 && runner1){
        runner1 = runner1.next
        } else if(!runner1 && runner2){
        	 runner2 = runner2.next
        } else {
        runner2 = runner2.next
        runner1 = runner1.next
        }

        if(runner1 || runner2){
        	  runner3.next = new ListNode(0)
        	runner3 = runner3.next;
        } else if (!runner2 && !runner1 && resudial== 1){
        	runner3.next = new ListNode(1)
        	return result
        }

        else {
        	return result
        }

    }
};
