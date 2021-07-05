// 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

var peakIndexInMountainArray = function(arr) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo < hi) {
        const mid = Math.floor((hi + lo) / 2);
        console.log(mid)
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid] > arr[mid - 1]) {
            lo = mid;
        } else {
            hi = mid;
        }
    }
};

// const peakIndexInMountainArray = (A, low = 0, high = A.length - 1) => {
//     if (!A.length) 
//         return -1
    
//     const mid = ((low + high) / 2) | 0
	
//     if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1])
//         return mid
    
//     if (A[mid] < A[mid - 1]) 
//         return peakIndexInMountainArray(A, low, mid)
    
//     if (A[mid] < A[mid + 1])
//         return peakIndexInMountainArray(A, mid, high)
// }