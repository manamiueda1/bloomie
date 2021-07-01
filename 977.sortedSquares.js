// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    let pointer = nums.length-1;

    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[pointer] = nums[left] ** 2;
            pointer--
            left++
        } else {
            result[pointer] = nums[right] ** 2;
            pointer--
            right--
        }
    }
    return result;
    // for (let i = 0; i < nums.length; i++){
    //     nums[i] = nums[i] * nums[i] 
    // }
    // return nums.sort((a, b) => a-b)
    
};