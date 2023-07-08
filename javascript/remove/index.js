'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  removeNode(data) {
    let currentNode = this.head;
    let previousNode = null;

    if(currentNode && currentNode.data == data) {
      this.head = currentNode.next;
      return;
    }

    while(currentNode && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode.currentNode.next;
    }

    if(!currentNode) {
      return;
    }

    previousNode.next = currentNode.next;
  }
}

module.exports = {
  Node,
  LinkedList
}
