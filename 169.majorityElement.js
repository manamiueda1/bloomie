// 169. Majority Element
// https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
    var obj = {};
   
   for(var i = 0; i < nums.length; i++){
       obj[nums[i]] = obj[nums[i]] + 1 || 1;
       if(obj[nums[i]] > nums.length / 2)  return nums[i];
   }
};

var majorityElement = function(nums) {
    nums.sort((a,b) => b-a)
    return nums[Math.floor(nums.length/2)]
};