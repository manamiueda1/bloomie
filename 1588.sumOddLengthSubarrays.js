// 1588. Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

var sumOddLengthSubarrays = function(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++){
        let count = 0;
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            count++
            sum += arr[j]
            if (count % 2 === 1){
                counter += sum
            }
        }
    }
    return counter
};

// optimized (need to review)
// var sumOddLengthSubarrays = function(arr) {
//     sum = 0;
//     var l = arr.length;

//     for(var i=0;i<arr.length;i++) {
//         sum += Math.floor(((i + 1) * (l - i) +
//                  1) / 2) * arr[i];
//     }
//     return sum
// };