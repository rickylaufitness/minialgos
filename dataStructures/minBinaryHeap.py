'''
Implement a Min Heap class. The class should support insertion, removal(of the minimum/root value),
peeking(of the minimum/root value), as well as sifting a value up and down the heap and building the heap
from an input array. The heap should be represented in the form of an array.

Input: array = [48,12,24,7,8,-5,24,391,24,56,2,6,8,41]

buildHeap(array)
insert(76)
remove()
remove()
insert(87)

Output:

[-5,2,6,7,8,8,24,391,24,56,12,24,48,41]
[-5,2,6,7,8,8,24,391,24,56,12,24,48,41,76]
[2,6,7,24,8,8,24,391,76,56,12,24,48,41]
[6,7,8,24,8,24,24,391,76,56,12,41,48]
[6,7,8,24,8,24,24,391,76,56,12,41,48,87]
'''


class MinHeap:
    def __init__(self, array):
        self.heap = self.buildHeap(array)

    # O(n) time | O(1) space
    def buildHeap(self, array):
        firstParentIdx = (len(array) - 2) // 2
        for currentIdx in reversed(range(firstParentIdx + 1)):
            self.siftDown(currentIdx, len(array) - 1, array)

        return array

    # O(log(n)) time | O(1) space
    def siftDown(self, currentIdx, endIdx, heap):
        childOneIdx = currentIdx * 2 + 1
        while childOneIdx <= endIdx:
            childTwoIdx = currentIdx * 2 + 2 if currentIdx * 2 + 2 <= endIdx else -1
            if childTwoIdx != -1 and heap[childTwoIdx] < heap[childOneIdx]:
                idxToSwap = childTwoIdx
            else:
                idxToSwap = childOneIdx
            if heap[idxToSwap] < heap[currentIdx]:
                self.swap(currentIdx, idxToSwap, heap)
                currentIdx = idxToSwap
                childOneIdx = currentIdx * 2 + 1
            else:
                return

    # O(log(n)) time | O(1) space
    def siftUp(self, currentIdx, heap):
        parentIdx = (currentIdx - 1) // 2
        while currentIdx > 0 and heap[currentIdx] < heap[parentIdx]:
            self.swap(currentIdx, parentIdx, heap)
            currentIdx = parentIdx
            parentIdx = (currentIdx - 1) // 2

    # O(1) time | O(1) space
    def peek(self):
        return self.heap[0]

    # O(log(n)) time | O(1) space
    def insert(self, value):
        self.heap.append(value)
        self.siftUp(len(self.heap) - 1, self.heap)

    # O(log(n)) time | O(1) space
    def remove(self):
        self.swap(0, len(self.heap) - 1, self.heap)
        valueToRemove = self.heap.pop()
        self.siftDown(0, len(self.heap) - 1, self.heap)

        return valueToRemove

    def swap(self, i, j, heap):
        heap[i], heap[j] = heap[j], heap[i]
