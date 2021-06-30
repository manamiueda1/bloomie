// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function(nums, k) {
    let arr = nums.sort((a, b) => b-a)
    return arr[k-1]
};