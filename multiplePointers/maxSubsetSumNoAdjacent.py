'''
Write a function that takes in an array of positive integers and returns an integer representing the maximum sum of non-adjacent elements in the array. If a sum cannot be generated, the function should return 0.

Input: [75,105,120,75,90,135]
Output: 330 (75 + 120 + 135)
'''


# O(array.length) time | O(1) space
def maxSubsetSumNoAdjacent(array):
    if not len(array):
        return 0
    elif len(array) == 1:
        return array[0]

    first = max(array[0], array[1])
    second = array[0]

    for i in range(2, len(array)):
        current = max(first, second + array[i])
        second = first
        first = current

    return first
