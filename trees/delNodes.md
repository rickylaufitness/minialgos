Given the root of binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

**Example 1**:

![](del-nodes.png)

**Input**: root = [1,2,3,4,5,6,7], to_delete = [3,5]

**Output**: [[1,2,null,4],[6],[7]]