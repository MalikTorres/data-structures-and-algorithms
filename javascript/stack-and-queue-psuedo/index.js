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
}

class PseudoQueue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
  let firstStack = new Stack(value);
  
  }
}

module.exports = { Stack, PseudoQueue };
