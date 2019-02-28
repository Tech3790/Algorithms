/*
Write a function linkedListIntersection that returns the 
node at which the intersection of two linked lists begins, or null if there is no such intersection.
*/
const linkedListIntersection = (list1, list2) => {
  let arr = [];
  while (list1) {
    arr.push(list1);
    list1 = list1.next;
  }
  while (list2) {
    if (arr.includes(list2)) return list2;
    list2 = list2.next;
  }
  return null;
};
