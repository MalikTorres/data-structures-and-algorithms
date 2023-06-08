'use strict';
const { BinaryTree, FizzBuzz } = require('./index');
// Helper function to create a binary tree with the given values

function createBinaryTree(values) {
  const tree = new BinaryTree();
  values.forEach((value) => tree.add(value));
  return tree;
}

// Test case 1: FizzBuzz transformation on an empty tree
test('FizzBuzz on an empty tree', () => {
  const tree = new FizzBuzz();
  expect(tree.fizzBuzz()).toBeNull();
});

// Test case 2: FizzBuzz transformation on a tree with no values divisible by 3 or 5
test('FizzBuzz on a tree with no divisible values', () => {
  const values = [1, 2, 4, 7, 8, 11];
  const tree = createBinaryTree(values);
  const fizzBuzzTree = tree.fizzBuzz();

  expect(fizzBuzzTree.inOrder()).toEqual(values.map(String));
});

// Test case 3: FizzBuzz transformation on a tree with values divisible by 3 and/or 5
test('FizzBuzz on a tree with divisible values', () => {
  const values = [1, 3, 5, 7, 9, 10, 15, 20, 30];
  const expected = ['1', 'Fizz', 'Buzz', '7', 'Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'FizzBuzz'];
  const tree = createBinaryTree(values);
  const fizzBuzzTree = tree.fizzBuzz();

  expect(fizzBuzzTree.inOrder()).toEqual(expected);
});
