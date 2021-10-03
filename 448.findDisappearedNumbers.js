// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let idx = num-1;
        nums[idx] = Math.abs(nums[idx]) * -1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i+1);
    }
    return res;
};