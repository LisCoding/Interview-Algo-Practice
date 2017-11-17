
function mergeSort (arr, start, end){
var diff = end - start
    if (diff > 0) {
      var mid = Math.floor((start + diff)/2);
      mergeSort(arr, start, mid);
      mergeSort(arr, mid+1, end);
      
      var newArr = [];
      var x = start;
      var y = mid+1;
      
      while (x != mid+1){
        if(y>end || arr[x]<arr[y]){
          newArr.push(arr[x]);
          x++;
        }
        else {
          newArr.push(arr[y]);
          y++;
        }
      }
      
      x = start;
      for (let i=0; i<newArr.length;i++){
        arr[x] = newArr[i];
        x++;
      }
    }
}


var findMedianSortedArrays = function(nums1, nums2) {
    var combinedArray = nums1.concat(nums2)
      start = 0;
      end = combinedArray.length
    return mergeSort(combinedArray, start, end)
}
    

console.log(findMedianSortedArrays([1,2],[45,6]))