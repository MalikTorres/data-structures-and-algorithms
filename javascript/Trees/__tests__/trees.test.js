const { BinarySearchTree } = require('../index');

describe('BinarySearchTree', () => {
  let binarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  test('can instantiate an empty tree', () => {
    expect(binarySearchTree.root).toBeNull();
  });

  test('can instantiate a tree with a single root node', () => {
    binarySearchTree.add(5);
    expect(binarySearchTree.root).not.toBeNull();
    expect(binarySearchTree.root.value).toBe(5);
  });

  test('can add left and right children to a node in a Binary Search Tree', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);

    expect(binarySearchTree.root.left).not.toBeNull();
    expect(binarySearchTree.root.left.value).toBe(3);
    expect(binarySearchTree.root.right).not.toBeNull();
    expect(binarySearchTree.root.right.value).toBe(7);
  });

  test('can return a collection from a pre-order traversal', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    expect(binarySearchTree.preOrder()).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  test('can return a collection from an in-order traversal', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    expect(binarySearchTree.inOrder()).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  test('can return a collection from a post-order traversal', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    expect(binarySearchTree.postOrder()).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });

  test('returns true for the contains method with an existing node value', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    expect(binarySearchTree.contains(4)).toBe(true);
  });

  test('returns false for the contains method with a non-existing node value', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);

    expect(binarySearchTree.contains(9)).toBe(false);


  });
  it(`Can successfully traverse input tree using Breadth-first approach`, () => {
    const bst = new BinarySearchTree();
    bst.add(1);
    bst.add(2);
    bst.add(3);
  });

});
