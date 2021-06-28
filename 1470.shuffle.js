// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    let result = [];
     let arr1 = nums.slice(n)
     let arr2 = nums.slice(0,n)
     for (let i = 0; i < arr1.length; i++){
         result.push(arr2[i])
         result.push(arr1[i])
     }
     return result
 };