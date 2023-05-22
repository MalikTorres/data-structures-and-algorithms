'use strict';
class Node {
  constructor(value) {
    // Start out with a value
    this.value = value;
    // That value does not know about the next value in the chain
    this.next = null;
  }

}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertBefore(value, newValue) {
    let node = new Node(value);
    let current = this.head;
    while (current.next !== null) {
      if (current.next === value) {
        current.next = newValue;
      }
    }
    current.next = node;

  }
}


module.exports = LinkedList;
