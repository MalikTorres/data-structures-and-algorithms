const { TreeNode, breadthFirst } = require('./index.js'); // Replace 'your-file' with the actual file name

describe('Breadth-First Traversal', () => {
  test('should perform breadth-first traversal correctly', () => {
    // Create the tree
    const root = new TreeNode(1);
    const child1 = new TreeNode(2);
    const child2 = new TreeNode(3);
    const child3 = new TreeNode(4);
    const child4 = new TreeNode(5);

    root.children.push(child1, child2, child3);
    child2.children.push(child4);

    // Perform breadth-first traversal
    const result = breadthFirst(root);

    // Assert the expected result
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty tree', () => {
    const result = breadthFirst(null);
    expect(result).toEqual([]);
  });

  test('should handle a tree with a single node', () => {
    const root = new TreeNode(1);
    const result = breadthFirst(root);
    expect(result).toEqual([1]);
  });

  test('should handle a tree with multiple levels', () => {
    const root = new TreeNode(1);
    const child1 = new TreeNode(2);
    const child2 = new TreeNode(3);
    const grandchild1 = new TreeNode(4);
    const grandchild2 = new TreeNode(5);

    root.children.push(child1, child2);
    child1.children.push(grandchild1);
    grandchild1.children.push(grandchild2);

    const result = breadthFirst(root);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle a tree with multiple children per node', () => {
    const root = new TreeNode(1);
    const child1 = new TreeNode(2);
    const child2 = new TreeNode(3);
    const child3 = new TreeNode(4);
    const child4 = new TreeNode(5);

    root.children.push(child1, child2, child3, child4);

    const result = breadthFirst(root);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle a tree with circular reference', () => {
    const root = new TreeNode(1);
    const child1 = new TreeNode(2);
    const child2 = new TreeNode(3);
    const child3 = new TreeNode(4);
    const child4 = new TreeNode(5);

    root.children.push(child1, child2, child3);
    child2.children.push(child4);
    child4.children.push(root); // Circular reference

    const result = breadthFirst(root);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
