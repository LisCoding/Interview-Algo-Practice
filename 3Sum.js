var threeSumFirstTry = function(nums) {
	nums = nums.sort(function(a, b) {
		console.log('hi');
		return a - b;
	});
	console.log(nums);
	let array = [];
	let start = 0;
	while (nums[start] < 1) {
		if (
			nums[start] === nums[start - 1] ||
			nums[start] + nums[nums.length - 1] + nums[nums.length - 2] < 0
		) {
			start++;
			continue;
		}
		let end = nums.length - 1;
		while (end > start + 1) {
			if (
				nums[end] === nums[end + 1] ||
				nums[start] + nums[end] + nums[start + 1] > 0
			) {
				end--;
				continue;
			}
			let middle = end - 1;
			while (middle > start) {
				console.log(nums[start], nums[end], nums[middle]);
				if (nums[start] + nums[end] + nums[middle] === 0) {
					array.push([nums[start], nums[end], nums[middle]]);
					break;
				}
				middle--;
			}
			end--;
		}
		start++;
	}
	return array;
};

//console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// below passed the leetcode time limitations
var threeSum = function(nums) {
	nums = nums.sort(function(a, b) {
		console.log('hi');
		return a - b;
	});
	console.log(nums);
	let array = [];
	let start = 0;
	while (nums[start] < 1) {
		if (
			nums[start] === nums[start - 1] ||
			nums[start] + nums[nums.length - 1] + nums[nums.length - 2] < 0
		) {
			start++;
			continue;
		}
		let left = start + 1;
		let right = nums.length - 1;
		while (left < right) {
			console.log(nums[start], nums[left], nums[right]);
			if (nums[start] + nums[left] + nums[right] === 0) {
				array.push([nums[start], nums[left], nums[right]]);
				left++;
				right--;
				while (nums[left] === nums[left - 1]) {
					left++;
				}
			} else if (nums[start] + nums[left] + nums[right] < 0) {
				left++;
			} else {
				right--;
			}
		}
		start++;
	}
	return array;
};

console.log(threeSum([-2, 0, 0, 2, 2]));
