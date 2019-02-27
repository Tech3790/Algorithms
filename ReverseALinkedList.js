/*
An algorithm to reverse a given linked list using two different approaches:
*/

// Approach #1 the iterative way using a while loop we iterate through.
// the linked list and reverse the links of each node to the previous one.
// Linear time complexity is O(n).
const reverseLinkedList = head => {
  let prev = (next = null);
  let current = head;
  // if there is only one node in the given list we return that node.
  if (!current.next) return current;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
// Approach #2 using recursion.
// Linear time complexity is O(n).
const reverseLinkedList = (node, parent) => {
  let result = parent || {};
  if (node) {
    const child = node.next;
    node.next = parent;
    result = reverse(child, node);
  }
  return result;
};
