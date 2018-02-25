var maxArea = function(height) {
	let start = 0;
	let end = height.length - 1;
	let maxArea = 0;

	while (start < end) {
		let limit = height[start] < height[end] ? height[start] : height[end];
		let area = limit * (end - start);
		if (area > maxArea) {
			maxArea = area;
		}
		height[start] < height[end] ? start++ : end--;
	}
	return maxArea;
};
