// Write a function that takes a sorted array of integers and a target average.
// returns a boolean on whether any number in the given array can equal to the target average.

// Ex 1) ([1,2,3], 2.5) => true
//       ([],2) => false

// multiple pointers approach

// TIME COMPLEXITY
// O(logn) time

// SPACE COMPLEXITY
// O(1) space

function averagePair(arr, avg) {
  if (avg > arr[arr.length - 1]) return false;
  if (!arr.length) return false;

  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let testAvg = right + left / 2;
    if (testAvg === avg) return true;
    else if (testAvg < avg) left++;
    else right--;
  }
  return false;
}