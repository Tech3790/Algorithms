/*
Return the last index of a given target in a given array
*/

// Recursive solution
function lastIndexOf(array, target, ind = -1, c = 0) {
  let index = ind;
  let counter = c;
  if (array[0] === target) {
    index = counter;
  }
  counter++;
  if (array.length > 1) {
    return lastIndexOf(array.slice(1), target, index, counter);
  }
  return index;
}
