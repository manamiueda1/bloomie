// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++){
        
        if (nums[i-1] > 0){
            
            nums[i] += nums[i-1]
        }    
    }
    return Math.max(...nums)
};