// Fibonacci sequence with recursion 

function fibRecArr(num, arr = [1, 1]) {
	if (num === 0) { return [1]; }
  if (num == 1) { return arr; }
  if (num + 1 == arr.length) {
  	return arr;
  } else {
  	var value = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(value);
    return fibRecArr(num, arr);
  }
}

console.log(fibRecArr(4));