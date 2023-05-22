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
    // When Instantiating a linked list nothing is passed into that list, and it is completely empy
    this.head = null;
  }
  // adds a node to the FRONT of a linked list
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    // If the head is null make the new node the head
    this.head = node;
  }
  // adds a node to the END of a linked list
  append(value) {
    let node = new Node(value);
    // if the head is null, we need to assign this new node to the head as well
    if (!this.head) {
      // in other words, if the list was empty do this and done
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  // iteratively travers linked list and do a thing
  traversal() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  // IN PROGRESS toString method
  toString() {
    let current = this.head
    let answer = ' ';
    while (current.next !== null) {
      answer += ", ";
    }
    return answer;
  }
}

module.exports = LinkedList;
