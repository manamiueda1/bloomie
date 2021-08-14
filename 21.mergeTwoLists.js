// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(l1, l2) {
    var mergedHead = { val : null, next : null },
       pointer = mergedHead;
   while(l1 && l2) {
       if(l1.val > l2.val) {
           pointer.next = l2;
           l2 = l2.next;
       } else {
           pointer.next = l1;
           l1 = l1.next;
       }
       pointer = pointer.next;
   }
   pointer.next = l1 || l2;
   
   return mergedHead.next;
};