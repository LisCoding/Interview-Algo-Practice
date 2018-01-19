function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var k;

var p = new TreeNode(1);
// p.left = new TreeNode(2);
p.right = new TreeNode(2);
// p.left.left = new TreeNode(3);
// p.right.right = new TreeNode(3);
// p.right.right.right = new TreeNode(10);
// p.left.left.left = new TreeNode(4);
// p.right.left.right = new TreeNode(4);
// p.right.left.right.left = new TreeNode(5);
// p.right.left.right.left.left = new TreeNode();
// p.right.left.right.left.right = new TreeNode(6);
// p.right.left.right.left.right.left = new TreeNode(7);


var minDepth = function(root, count=0) {
    if(!root) {
        return 0;
    }
    count++
    if(!root.left && !root.right) {
      return count;
    }
    var left;
    var right;
    if (root.left) {
      left = minDepth(root.left, count)
    }
    if (root.right) {
      right = minDepth(root.right, count)
    }
    if(!left) {
      return right;
    }
    return left>right?right:left
};

console.log(minDepth(p))

