'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  treeIntersection(tree1, tree2) {
    const valuesMap = new Map();
    const result = new Set();

    this.traverseAndStore(tree1.root, valuesMap);

    this.findIntersection(tree2.root, valuesMap, result);

    return result;
  }

  traverseAndStore(node, valuesMap) {
    if (node === null) return;

    valuesMap.set(node.value, true);

    this.traverseAndStore(node.left, valuesMap);
    this.traverseAndStore(node.right, valuesMap);
  }

  findIntersection(node, valuesMap, result) {
    if (node === null) return;

    if (valuesMap.has(node.value)) {
      result.add(node.value);
    }

    this.findIntersection(node.left, valuesMap, result);
    this.findIntersection(node.right, valuesMap, result);
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(14);

const bst2 = new BinarySearchTree();
bst2.add(3);
bst2.add(6);
bst2.add(12);
bst2.add(1);
bst2.add(15);

const intersection = bst.treeIntersection(bst.root, bst2.root);
console.log([...intersection]); // Output: [3, 6, 1]
