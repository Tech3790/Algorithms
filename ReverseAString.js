/*
An algorithm to reverse a given string using two different approaches:
*/

// Aproach #1 linear time complexity O(n).
// starting with the last character it will start pushing characters to an empty string then will return it.
const reverse = word =>{
  let reversedString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString += word[i];
  }
  return reversedString;
}
// Approach #2
// it will swap the first character with the last one then push them to a new array, then the second character 
// with the second last one and so on until it reaches the middle point of the original string.
const reverse = word => {
  let midPoint = Math.ceil(word.length / 2);
  let charsArray = [];
  for (let i = 0, j = word.length - 1; i <= midPoint; i++, j--) {
    charsArray[i] = word[j];
    charsArray[j] = word[i];
  }
// and finally will convert the array to a string.
  return charsArray.join("");
};