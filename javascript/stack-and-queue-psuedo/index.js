class Node {
  constructor(value) {
    this.value = value;
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
  isEmpty() {
    return this.top === null;
  }
}


class PseudoQueue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value) {
    // Push all elements from the secondStack to the firstStack
    while (!this.secondStack.isEmpty()) {
      this.firstStack.push(this.secondStack.pop());
    }

    // Reverse the order of elements in the firstStack by using a temporary stack
    const tempStack = new Stack();
    while (!this.firstStack.isEmpty()) {
      tempStack.push(this.firstStack.pop());
    }

    // Push the new value to the firstStack
    this.firstStack.push(value);

    // Push back the elements from the temporary stack to the firstStack to restore the original order
    while (!tempStack.isEmpty()) {
      this.firstStack.push(tempStack.pop());
    }
  }

  dequeue() {
    // If both stacks are empty, there are no elements in the queue
    if (this.firstStack.isEmpty() && this.secondStack.isEmpty()) {
      throw new Error('Queue is empty');
    }

    // If the secondStack is empty, transfer all elements from the firstStack to the secondStack
    if (this.secondStack.isEmpty()) {
      while (!this.firstStack.isEmpty()) {
        this.secondStack.push(this.firstStack.pop());
      }
    }

    // Pop the element from the secondStack, which corresponds to the front of the queue
    const dequeuedValue = this.secondStack.pop();

    // If the secondStack becomes empty after dequeueing an element, transfer remaining elements from the firstStack
    if (this.secondStack.isEmpty() && !this.firstStack.isEmpty()) {
      while (!this.firstStack.isEmpty()) {
        this.secondStack.push(this.firstStack.pop());
      }
    }

    return dequeuedValue;
  }
}

module.exports = { Stack, PseudoQueue };
