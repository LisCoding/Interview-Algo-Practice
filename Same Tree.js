function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

p = new TreeNode(2)
p.left = new TreeNode(2)
p.right = new TreeNode(3)
p.left.left = new TreeNode(3)
p.left.right = new TreeNode(3)
p.right.left = new TreeNode(3)
p.right.right = new TreeNode(3)

q = new TreeNode(2)
q.left = new TreeNode(2)
// q.right = new TreeNode(3)
q.left.left = new TreeNode(3)
q.left.right = new TreeNode(3)
// q.right.left = new TreeNode(3)
// q.right.right = new TreeNode(3)

// console.log(p, q)

var isSameTree = function(p, q) {
  var same = true;
  
  if ((!p && q) || (!q && p) || (p && q && p.val != q.val) || (p && q && p.left && !q.left) || (p && q && !p.left && q.left) || (p && q && p.right && !q.right) || (p && q && !p.right && q.right)) {
    return false;
  }
  if (p && q && p.left && q.left) {
    var temp = isSameTree(p.left, q.left)
    if (!temp) {
      same = false;
    }
  }
  if (p && q && q.right && q.right) {
    var temp2 = isSameTree(p.right, q.right)
    if (!temp2) {
      same = false;
    }
  }
    return same
};

console.log(isSameTree(p,q))

