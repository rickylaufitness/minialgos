// Write a function that takes in a substring and a string and returns a boolean on whether the substr exists in the string.
// Order Matters. return false otherwise.

// Ex 1) ('hi','hi there') => true
//       ('hi', 'h') => false
//       ('hiw', 'hw theri')  => false

// O(str.length) time | O(1) space
const isSubSequence = (subStr, str) => {
  if (subStr.length > str.length) return false;

  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerTwo < str.length) {
    if (str[pointerTwo] === subStr[pointerOne]) pointerOne++;
    if (pointerOne === subStr.length) return true;
    pointerTwo++;
  }
  return false;
};
