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
  findMax() {
    let currentMax = 0;
    let node = this.root;
    const traverse = (node) => {
      console.log(node.value);
      if (currentMax < node.value) {
        currentMax = node.value;
      }
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
    };
    traverse(node);
    return currentMax;
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
breadthFirst() {
  if (this.root === null) {
    return null;
  }
  const queue = [];
  const results = [];
  queue.push(this.root);
  while (queue.length) {
    let current = queue.shift();
    results.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return results;
}

