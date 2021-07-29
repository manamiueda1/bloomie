// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i]
        }
    }
    console.log(nums)
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
  // let i = 0;
  // let count = 0;
  // while (i < nums.length){
  //   if(nums[i] === 0){
  //     nums.splice(i, 1)
  //     count++
  //   } else {
  //       i++   
  //   }
  // }
  // while (count){
  //   nums.push(0)
  //   count--
  // }
}