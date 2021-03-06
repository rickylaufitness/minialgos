// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits
// return true if they do, otherwise return false.

// Ex 1) (182,218) => true
//       (34, 14) => false
//       (22, 222) => false

// TIME COMPLEXITY
// O(n) time

// SPACE COMPLEXITY
// O(n) space

const sameFrequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  const count = {};

  for (const val of num1) {
    count[val] = count[val]++ || 1;
  }

  for (let i = 0; i < num2.length; i++) {
    const num = num2[i];
    if (!count[num]) return false;
    else count[num]--;
  }

  return true;
};
