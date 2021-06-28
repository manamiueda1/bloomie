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