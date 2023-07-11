class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function breadthFirst(tree) {
  if (!tree) {
    return [];
  }

  const queue = [];
  const result = [];

  queue.push(tree);

  while (queue.length !== 0) {
    const node = queue.shift();
    result.push(node.value);
    for (const child of node.children) {
      queue.push(child);
    }

  }

  return result;
}

module.exports = {
  TreeNode,
  breadthFirst
};
