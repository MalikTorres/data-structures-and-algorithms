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
  // inlcudes method
  includes(value) {
    let current = this.head;
    while (current) {
      // shorthand one liner
      if (current.value === value) return true;
      // another way - maybe the way you are used to seeing
      // if(current.value === valuse){
      // return true
      // };
      current = current.next;
    }
    return false;
  }

  // IN PROGRESS toString method
  toString() {
    let result = '';
    let current = this.head;
    while (current) {
      // result variable is now adding and reassigning the current value
      result += `{${current.value}} -> `;
      // current is now moving through the next value until it is null with current.next
      current = current.next;
    }
    return result;
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

  findTheKthNode(k) {
    let current = this.head;
    for (let i = 0; current !== null && i < k; i++) {
      if (current === null && i !== k - 1) {
        return null;
      }
      while (current !== null) {
        current = current.next;
      }
      return current;
    }
  }

  linkedListZip(listOne, listTwo) {

    let secondPointer = new Node(0);
    let current = secondPointer;

    while(listOne && listTwo) {
      current.next = listOne;
      current = current.next;

      current.next = listTwo;
      listTwo = listTwo.next;
    }

    if(listOne) {
      current.next = listTwo;
    }

    if(listTwo) {
      current.next = listTwo;
    }
  }

}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

module.exports = LinkedList;
