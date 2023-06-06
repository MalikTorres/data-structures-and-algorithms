class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Pre-order traversal: root -> left -> right
  preOrder() {
    const result = [];

    function traverse(node) {
      if (node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }

  // In-order traversal: left -> root -> right
  inOrder() {
    const result = [];

    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }

  // Post-order traversal: left -> right -> root
  postOrder() {
    const result = [];

    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    }

    traverse(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }

    function insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }

  contains(value) {
    return searchNode(this.root, value);

    function searchNode(node, value) {
      if (!node) {
        return false;
      }

      if (value === node.value) {
        return true;
      }

      if (value < node.value) {
        return searchNode(node.left, value);
      } else {
        return searchNode(node.right, value);
      }
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.root = new Node(1);
binaryTree.root.left = new Node(2);
binaryTree.root.right = new Node(3);
binaryTree.root.left.left = new Node(4);
binaryTree.root.left.right = new Node(5);

console.log(binaryTree.preOrder());   // [1, 2, 4, 5, 3]
console.log(binaryTree.inOrder());    // [4, 2, 5, 1, 3]
console.log(binaryTree.postOrder());  // [4, 5, 2, 3, 1]

const binarySearchTree = new BinarySearchTree();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);

console.log(binarySearchTree.contains(4));  // true
console.log(binarySearchTree.contains(9));  // false
