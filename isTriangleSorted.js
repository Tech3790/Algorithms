/*
An algorithm to check if a given array is triangle sorted or not:
a triangle sorted array is an array that increases to some point then it will start decreasing until the end of it
for example [1,3,5,4,2,0] is a valid triangle sorted array but [1,2,3,5,4,3,7,2,1] is not valid because it starts 
increasing after it is decreasing.
*/

const isTriangleSorted = array => {
  let increasing = true;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1] && !increasing) {
      increasing = true;
      counter++;
    } else if (array[i] > array[i + 1] && increasing) {
      increasing = false;
      counter++;
    }
  }
  return counter === 1;
};
