'''
Write a function that takes in a Binary Tree and returns a list of its branch sums(ordered from leftmost branch sum to rightmost branch sum).
A branch sum is the sum of all values in a Binary Tree branch.
A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
Each Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right", respectively. Children nodes can either be Binary Tree nodes themselves or the None(null) value.

  Input:
          1
        / \
        2   3
      / \  / \
      4  5 6  7
    / \   \
    8   9   10

  Output: [15,16,18,10,11]
'''


# O(n) time | O(n) space - n = # of nodes in Binary Tree
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    sums = []
    calculateBranchSums(root, 0, sums)
    return sums


def calculateBranchSums(node, runSum, sums):
    if node is None:
        return

    newRunningSum = runSum + node.value

    if node.left is None and node.right is None:
        sums.append(newRunningSum)
        return

    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)
