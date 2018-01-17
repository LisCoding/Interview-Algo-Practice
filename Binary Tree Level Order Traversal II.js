function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(2);
p.right.left = new TreeNode(3);
p.left.left = new TreeNode(3);
p.left.right = new TreeNode(10);
p.left.left.right = new TreeNode(4);
p.right.left.right = new TreeNode(4);
p.right.left.right.left = new TreeNode(5);
// p.right.left.right.left.left = new TreeNode();
p.right.left.right.left.right = new TreeNode(6);
p.right.left.right.left.right.left = new TreeNode(7);

var levelOrderBottom = function(root, arr=[[]], count=0) {
  // console.log(arr[6])
    if (!root) {
      return [];
    }
    else {
      arr[count] = [root.val];
      _levelOrderBottom(root, arr, count)
      arr.reverse()  
      return arr
    }
};

var _levelOrderBottom = function(root, arr, count) {
  console.log(count)
    if (!root) {
      return;
    }
    else {
      count++
      if(root.left && !root.right) {
        _levelOrderBottom(root.left, arr, count)
        if(arr[count]){
          arr[count].push(root.left.val);
        } else {
          arr[count] = [root.left.val];
        }
      }
      if(root.right && !root.left) {
        _levelOrderBottom(root.right, arr, count)
        if(arr[count]){
          arr[count].push(root.right.val);
        } else {
          arr[count] = [root.right.val];
        }
      }
      if(root.right && root.left) {
        _levelOrderBottom(root.left, arr, count)
        _levelOrderBottom(root.right, arr, count)
        if(arr[count]){
          arr[count].push(root.left.val, root.right.val)
        } else {
          arr[count] = [root.left.val, root.right.val];
        }
      }
      count--
      return arr
    }
}

console.log(levelOrderBottom(p))