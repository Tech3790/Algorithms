/* 
You are given the head of a linked list, a value to be inserted, and an offset n. 
Write a function that inserts the provided value n spaces from the end of the linked list.
*/

// a helper function to calculate the size of the given list.
const getSize = head => {
  let size = 0;
  while (head) {
    size++;
    head = head.next;
  }
  return size;
};

var insertFromEnd = function(head, value, offset) {
  let newNode = Node(value);
  // to get the location of where to insert the new node we sustract the offset from the size of the original list.
  let location = getSize(head) - offset;
  let currentLocation = 1;
  let current = head;

  while (current) {
    if (currentLocation === location) {
      newNode.next = current.next;
      current.next = newNode;
      break;
    }
    currentLocation++;
    current = current.next;
  }
  return head;
};

