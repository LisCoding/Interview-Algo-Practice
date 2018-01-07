var merge = function(nums1, m, nums2, n) {
  
    while (nums1.length > m){
      nums1.pop()
    }
  
    for (let x = 0; x < nums2.length; x++) {
      if (nums2[x] <= nums1[0]) {
        nums1.unshift(nums2[x]);
        console.log("unshift",nums1)
      }
      else if (nums2[x] >= nums1[nums1.length-1] || nums1.length === 0) {
         nums1.push(nums2[x]);
         console.log("push", nums1)
      }
      else {
         singleMerge(nums1, nums2[x]);
      }
    }
};

var singleMerge = function(arr, num, start=0, end=arr.length-1) {
  var position = Math.floor((start+end)/2);
  console.log("up",arr[position], start, end, position)
  if ((arr[position] > num && arr[position-1] < num) || arr[position] == num) {
    arr.splice(position, 0, num);
    console.log("change", arr)
    return
  }
  else if (arr[position] < num && arr[position+1] > num) {
    arr.splice(position+1, 0, num);
    console.log("change", arr)
    return
  }
  else if (arr[position] > num) {
    end = position;
    console.log("bigger", arr[position])
  }
  else {
    start = position;
    console.log("smaller", arr[position])
  }
  console.log("down",arr[position])
  return singleMerge(arr, num, start, end)
}

arr = [1,2,3,5,7,7,12,45]
arr2 = [-1,1,2,4,10,44,45,56]
console.log(arr)
// singleMerge(arr, 2);
// console.log(arr)

merge(arr, 5, arr2)
console.log("hi", arr)
 
 