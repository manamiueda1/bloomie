// 1. Two Sum
// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target){
    let hash = {}
    
    for (let i = 0; i < nums.length; i++){
        let remainder = target - nums[i]
        if (remainder in hash){
            return [hash[remainder], i]
        } else {
            hash[nums[i]] = i
        }
    }
}