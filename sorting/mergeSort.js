// Merge Sort

// It's a combination of two things - merging and sorting.
// Exploits the fact that arrays of 0 and 1 are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building into a newly sorted array.

// Merge Sort Pseudo code

// In order to implement merge sort, its useful to first implement a function responsible for combining two sorted arrays.
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays.
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed in.

// Create an empty array, take a look at the smallest values in each input array.
// While there are still values we haven't look at...
// if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to next.
// if the value in first is larger than the value in second, push the value from second into results and move on to next value in second array.
// once we exhaust one array, push all remaining values from other array.

// break up the array into halves until you have arrays that are empty or have one element.
// once you have smaller arrays, merge those arrays with other sorted arrays until you are back at full length
// once array has been merged together, return the merge and sorted array.

// TIME COMPLEXITY
// O(nlogn) time

// SPACE COMPLEXITY
// O(n) space

function merge(arr1, arr2) {
  let mergedArray = [];
  let pt1 = 0;
  let pt2 = 0;

  while (pt1 < arr1.length && pt2 < arr2.length) {
    if (arr2[pt2] > arr1[pt1]) {
      mergedArray.push(arr1[pt1]);
      pt1++;
    } else {
      mergedArray.push(arr2[pt2]);
      pt2++;
    }
  }

  while (pt1 < arr1.length) {
    mergedArray.push(arr1[pt1]);
    pt1++;
  }
  while (pt2 < arr2.length) {
    mergedArray.push(arr2[pt2]);
    pt2++;
  }

  return mergedArray;
}

function split(wholeArray) {
  let arrayLength = wholeArray.length;

  let midPoint = Math.floor(arrayLength / 2);

  let firstHalf = mergeSort(wholeArray.slice(0, midPoint));

  let secondHalf = mergeSort(wholeArray.slice(midPoint));

  return [firstHalf, secondHalf];
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let [firstHalf, secondHalf] = split(array);
  let mergedArray = merge(firstHalf, secondHalf);
  return mergedArray;
}
