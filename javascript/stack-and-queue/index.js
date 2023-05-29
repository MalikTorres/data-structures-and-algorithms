'use strict';

class Node {
  // Any time we create a node we are going to add some value, so we pass in a value when we create this node.
  constructor(value) {
    this.value = value;
    // this.next will always be intionally nothing to get started
    // A node next value is by default null, because there is nothing coming after that node. IF there is no next the next is null
    this.next = null;
  }
}

class Stack {
  constructor() {
    // the top will start as null, we crate our list as empty and then we add with our methods
    this.top = null;
  }

  push(value) {
    // we've given this new node a value
    let newNode = new Node(value);
    // this is just replacing null with another null since the list started out as null
    // We move the top first and then we reassign the top
    // Now we're connecting this new node to the original top
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    // assgin the removed value intentionally to nothing
    let removedValue = null;
    if (this.top) {
      // if there is a top we're going to reassign it to the place holder variable which is currently nothing
      removedValue = this.top.value;
      // moving the top value
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek() {
    // returns the value at the top of the stack
    return this.top.value;
  }

  isEmpty() {
    // if there is no top this will be true if there is top this will be false
    return this.top === null;
  }
}

class Queue {
  constructor() {
    // Both the front and the back start out empty
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      // get ready to get in line

      this.back.next = newNode;
    } else {
      // if there is no front... yet, we need to assign one!
      this.front = newNode;
    }
    // we assign the back pointer OR you could say we move the back pointer to the new node
    this.back = newNode;
  }
  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      // if there was only one node in Queue, we need to make back null
      if (this.front === this.back) {
        this.back = null;
      }
      // works if list is emoty or populated! Will either be null, or "next in line"
      this.front = this.front.next;
    }
    return removedValue;
  }
  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}
module.exports = { Stack, Queue };
