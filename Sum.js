/*
Given an array of numbers, calculate the greatest contiguous sum of numbers in it. 
A single array item will count as a contiguous sum.
*/
const getSum = arr => {
  if (arr.length !== 0) {
    let total = 0;
    arr.forEach(element => {
      total += element;
    });
    return total;
  }
};

const sumArray = array => {
  let max = null;
  let newSum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      newSum = getSum(array.slice(i, j + 1));
      max = max || newSum;
      if (newSum > max) {
        max = newSum;
      }
    }
  }
  return max;
};

