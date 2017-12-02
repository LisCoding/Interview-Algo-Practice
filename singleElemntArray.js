
// 540. Single Element in a Sorted Array
//
// Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element
// that appears only once.
//Yeah!!!!!!

function findSingle(arr){
	var x = arr.length-1
	if(arr[0]!= arr[1]){
		return arr[0]
	}
	if(arr[x] != arr[x-1]){
		return arr[x]
	}
	var mid;
	var a1;
	var a2;
	while(true){
		mid = Math.floor(arr.length/2);
		if( arr[mid] != arr[mid-1] &&  arr[mid] != arr[mid+1]){
			return arr[mid]
		}

		if(arr[mid] == arr[mid+1]){
			a1 = arr.slice(0, mid);
			a2 = arr.slice(mid, arr.length);
			if(a1.length % 2 !== 0){
				arr = a1;
			}else {
				arr = a2
			}

		} else {
			a1 = arr.slice(0, mid+1);
			a2 = arr.slice(mid+1, arr.length);
			if(a1.length % 2 !== 0){
				arr = a1;
			}else {
				arr = a2
			}
		}
	}
}

findSingle([1, 1, 2,2,3,3,4, 5, 5])
