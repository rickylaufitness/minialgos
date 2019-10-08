/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6

Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
/*

*/

// A path is a valid path as long as the path for each node does not connnect more than 2 nodes.

//Recursive solution
// mps helper function - gets the max path sum for each sub tree
// There could be negative numbers!

// this might not work because this always includes the curr node value!
// this also does not work because by adding the sub trees and the root node it cancels our definition for a path.
// declare a temp variable = max (left sub tree + curr node, curr node)
// declare a temp2 variable = max (temp + right sub tree ,temp)

// Edge Case
// If any of your max path sums of your sub trees resembles a "triangle" shape. - ignore the root node.
// We can compute not just the mps of each node, but also the mps of each node's branch. - not in the form of a triangle!
// By finding the mps of only the branches, we can add them.

// But you also need to keep track of your mps of your triangles.

// Approach
// Compute the mps of each node's branch, not the triangle.
// Then compute the mps of root node, in triangle.
// Compute the running max path sum as well.

// first return - as a branch
// Left sum as branch, Left Sum (regardless) = mps(L)
// Right sum as a brach, Right Sum (regardless ) = mps(L)
// Maximum child sum as a branch = max (left sum as a branch, right sum as a branch)
// Maximum sum a a branch = max (MCSB + curr node, curr node)

// second return - as a triangle

function maxPathSum(tree) {}
