'use strict';

const { Stack } = require('./index');

describe('Stack', () => {
  it('Can successfully push on to a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });
  it('Can successfully push multiple values  on to a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    // 3 went in last so it's the first out
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    // next represents the next value in the stack
    expect(stack.top.next.next.value).toEqual(1);
    // null always has no value(THERE IS NO NODE)
    expect(stack.top.next.next.next).toBeNull();
  });
  it('Can successfully pop off a value in stack', () => {
    let stack = new Stack();
    stack.pop(1);
    expect(stack.top.value).toBeNull();
  });
  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop(1);
    stack.pop(2);
    //expect(stack.top.value).toBeNull();
    expect(stack.top.next.value).toBeNull();
    expect(stack.top.next.value).toBeNull();
  });

  it('should successfully pop off the stack', () => {
    let stack = new Stack();
    // Add some values to the stack
    stack.push(10);
    stack.push(20);
    stack.push(30);

    // Perform pop operation
    const poppedValue = stack.pop();

    // Check if the popped value is correct
    expect(poppedValue).toBe(30);

    // Check if the stack is updated correctly
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(20);
  });

});

// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception
