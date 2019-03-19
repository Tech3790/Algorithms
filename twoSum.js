/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
*/
// Quadratic time complexity (Brute force solution).
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// linear time complexity (Optimized solution).
const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
};
