// 167. Two Sum II - Input array is sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/


var twoSum = function (numbers, target){
    let front = 0
    let end = numbers.length-1 
    if(numbers[front]+numbers[end] === target){
        return [front+1, end+1]
      }
    while (numbers[front] + numbers[end] !== target){
        if (numbers[front] + numbers[end] < target){
            front++
        } if (numbers[front] + numbers[end] > target){
            end--
        } if(numbers[front] + numbers[end] === target) {
            return [front+1, end+1]
        }
    }
    
}