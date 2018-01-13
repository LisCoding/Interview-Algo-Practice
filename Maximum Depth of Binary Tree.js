function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(2);
p.right.left = new TreeNode(3);
p.left.left = new TreeNode(3);
p.left.left.right = new TreeNode(4);
p.right.left.right = new TreeNode(4);
p.right.left.right.left = new TreeNode(5);
p.right.left.right.left.left = new TreeNode();
p.right.left.right.left.right = new TreeNode(6);
p.right.left.right.left.right.left = new TreeNode(7);

var maxDepth = function(root) {
    if (!root) {
      console.log("no root")
      return 0;
    }
    if (!root.left && !root.right) {
      return count;
    }
    var arr = [];
    _maxDepth(root, arr)
    console.log(arr)
    return Math.max.apply(null, arr);
};

var _maxDepth = function(root, arr, count=0) {
    count++;
    if(!root) {
      count--;
      arr.push(count)
      return
    }
    _maxDepth(root.left, arr, count)
    _maxDepth(root.right, arr, count)
}


console.log(maxDepth(p))





var maxDepthBetter = function(root) {
  if (!root) {
    return 0;
  }
  else {
    return max(maxDepthBetter(root.left),maxDepthBetter(root.right))+1;
  }
}

var max = function(a,b) {
  return a>b?a:b;
}


console.log(maxDepthBetter(p))