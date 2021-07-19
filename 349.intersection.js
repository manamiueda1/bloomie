// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function(nums1, nums2) {
    let setNum1 = new Set(nums1);
    let setNum2 = new Set(nums2)
    return [...setNum2].filter(num => setNum1.has(num));
    
//     let one = new Set(nums1)
//     let two = new Set(nums2)
//     let result = []
//     console.log(one)
//     console.log(two)
    
//     for(let val of one){
//         if (two.has(val)){
//             result.push(val)
//         }
//     }
//     return result
};