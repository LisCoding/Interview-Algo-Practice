function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var k;

var p = new TreeNode(0);
p.left = new TreeNode(2);
p.right = new TreeNode(2);
p.left.left = new TreeNode(3);
p.right.right = new TreeNode(0);
p.right.right.right = new TreeNode(10);
p.left.left.left = new TreeNode(4);
// p.right.left.right = new TreeNode(4);
// p.right.left.right.left = new TreeNode(5);
// p.right.left.right.left.left = new TreeNode();
// p.right.left.right.left.right = new TreeNode(6);
// p.right.left.right.left.right.left = new TreeNode(7);

var hasPathSum = function(root, sum) {
    if (!root && sum===undefined) {
      return true;
    }
    if(!root || sum===undefined) {
      console.log("hi")
      return false;
    }
    
    return _hasPathSum(root, sum);
    
    function _hasPathSum(root, sum, total=0) {
      if(!root) {
        console.log(root)
        return false;
      }
      total += root.val
      
      if (!root.left && !root.right && total === sum) {
        return true;
      }
      
      if (total > sum) {
      return false;
      }
      
      let x = _hasPathSum(root.left, sum, total)
      let y = _hasPathSum(root.right, sum, total)
      
      return x || y
      
    }
};

console.log(hasPathSum(p,0))

