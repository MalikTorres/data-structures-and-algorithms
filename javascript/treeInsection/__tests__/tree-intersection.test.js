'use strict';
const BinarySearchTree = require('../__tests__/tree-intersection.test');

describe('BinarySearchTree', () => {
  let tree1, tree2;

  beforeEach(() => {
    // Create two binary search trees for testing
    tree1 = new BinarySearchTree();
    tree2 = new BinarySearchTree();

    // Add nodes to the first tree
    tree1.add(5);
    tree1.add(3);
    tree1.add(8);
    tree1.add(2);
    tree1.add(4);
    tree1.add(7);
    tree1.add(9);

    // Add nodes to the second tree
    tree2.add(8);
    tree2.add(4);
    tree2.add(12);
    tree2.add(2);
    tree2.add(7);
    tree2.add(10);
    tree2.add(14);
  });

  test('treeIntersection returns set of common values in both trees', () => {
    const commonValues = tree1.treeIntersection(tree2);

    expect(commonValues.size).toBe(4);
    expect(commonValues.has(2)).toBe(true);
    expect(commonValues.has(4)).toBe(true);
    expect(commonValues.has(7)).toBe(true);
    expect(commonValues.has(8)).toBe(true);
  });

  test('treeIntersection returns empty set if no common values', () => {
    const emptyTree = new BinarySearchTree();

    const commonValues = tree1.treeIntersection(emptyTree);

    expect(commonValues.size).toBe(0);
  });
});
