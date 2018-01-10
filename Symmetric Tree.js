function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

p = new TreeNode(1)
p.left = new TreeNode(2)
p.right = new TreeNode(2)
p.left.left = new TreeNode(4)
p.left.right = new TreeNode(3)
p.right.left = new TreeNode(3)
p.right.right = new TreeNode(4)
p.left.left.left = new TreeNode(5)
// p.left.left.right = new TreeNode(4)
p.left.right.left = new TreeNode(3)
p.left.right.right = new TreeNode(2)
p.right.left.left = new TreeNode(2)
p.right.left.right = new TreeNode(3)
// p.right.right.left = new TreeNode(4)
p.right.right.right = new TreeNode(5)


// console.log(p, q)

var isSymmetric = function(root) {
  if (!root || (!root.left && !root.right)) {
    return true;
  }  
  if (!root.left || !root.right) {
    return false;
  }
  var leftArray = [root.left.val];
  var rightArray = [root.right.val];
  
  addToArray(root.left, leftArray, "left");
  addToArray(root.right, rightArray, "right");
  
  return JSON.stringify(leftArray)==JSON.stringify(rightArray);
  
};


var addToArray = function(root, arr, position) {
  if(!root) {
    return
  }
  arr.push(root.val)
  if (position == "left") {
    if (root.left) {
      addToArray(root.left, arr, "left")
    } else {
      arr.push("null")
    }
    if (root.right) {
      addToArray(root.right, arr, "left")
    } else {
      arr.push("null")
    }
  }
  if (position == "right") {
    if (root.right) {
      addToArray(root.right, arr, "right")
    } else {
      arr.push("null")
    }
    if (root.left) {
      addToArray(root.left, arr, "right")
    } else {
      arr.push("null")
    }
  }
}

console.log(isSymmetric(p))

//       1
//     2     2
//   4   3 3   4
// 5 4 3 2 2 3 4 5



// var isSymmetric = function(root) {
//   return root === null || _isSymmetric(root.left, root.right);
// };

// function _isSymmetric (left, right) {
//   if (left === null || right === null) {
//     return left === right;
//   }
//   if (left.val !== right.val) {
//     return false;
//   }
//   return _isSymmetric(left.left, right.right) && _isSymmetric(left.right, right.left);
// }



