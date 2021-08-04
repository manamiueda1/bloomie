// 252. Meeting Rooms
// https://leetcode.com/problems/meeting-rooms/

var canAttendMeetings = function(intervals) {
    let int = intervals.sort((a, b) => a[0]-b[0])
    
    for (let i = 1; i < int.length; i++){
        let currStart = int[i][0]
        let prevEnd = int[i-1][1]
        if (currStart < prevEnd){
            return false 
        }
    }
     return true
 };