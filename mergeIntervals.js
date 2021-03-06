/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
  Input: [[1,3], [2,6], [8,10], [15,18]]
  Output: [[1,6], [8,10], [15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6]

Example 2:
  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explantion: Intervals [1,4] and [4,5] are considered overlapping.
*/

// Time Complexity: O(nlogn)
// Space Complexity: O(1) - not counting return arr

const mergeIntervals = intervals => {
  if (!intervals.length) return intervals;

  intervals.sort((a, b) => (a !== b ? a[0] - b[0] : a[1] - b[1])); // sort least to greatest

  let prev = intervals[0];
  const res = [prev];

  for (const cur of intervals) {
    if (cur[0] <= prev[1]) {
      prev[1] = Math.max(cur[1], prev[1]);
    } else {
      res.push(cur);
      prev = cur;
    }
  }

  return res;
};
