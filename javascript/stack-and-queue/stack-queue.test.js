'use strict';

const { Stack, Queue, AnimalShelter, Animal } = require('./index');

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
    stack.pop();
    expect(stack.top.value).toBeNull();
  });

  it('should successfully pop a value off the stack', () => {
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

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeNull();
    expect(stack.top).toBeNull();
  });
  it('should return the top value using peek()', () => {
    let stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
    expect(stack.isEmpty()).toBe(false);
  });
});
describe('Queue', () => {
  it('Can successfully enqueue values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.back.value).toEqual(3);
  });

  it('Can successfully dequeue a value from a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const removedValue = queue.dequeue();
    expect(removedValue).toBe(1);
    expect(queue.front.value).toBe(2);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual({ 'next': null, 'value': 3 });
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.front).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });
  it('should return the front value using peek()', () => {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
    expect(queue.isEmpty()).toBe(false);
  });
});

describe('AnimalShelter', () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  it('should enqueue dogs and cats separately', () => {
    const dog1 = new Animal('dog', 'Dog1');
    const dog2 = new Animal('dog', 'Dog2');
    const cat1 = new Animal('cat', 'Cat1');
    const cat2 = new Animal('cat', 'Cat2');

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat2);

    expect(animalShelter.dogQueue.dequeue()).toBe(dog1);
    expect(animalShelter.dogQueue.dequeue()).toBe(dog2);
    expect(animalShelter.catQueue.dequeue()).toBe(cat1);
    expect(animalShelter.catQueue.dequeue()).toBe(cat2);
  });

  it('should dequeue dogs or cats based on preference', () => {
    const dog1 = new Animal('dog', 'Dog1');
    const dog2 = new Animal('dog', 'Dog2');
    const cat1 = new Animal('cat', 'Cat1');
    const cat2 = new Animal('cat', 'Cat2');

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat2);

    expect(animalShelter.dequeue('dog')).toBe(dog1);
    expect(animalShelter.dequeue('cat')).toBe(cat1);
    expect(animalShelter.dequeue('dog')).toBe(dog2);
    expect(animalShelter.dequeue('cat')).toBe(cat2);
  });

  it('should return null if preference is neither dog nor cat', () => {
    const dog = new Animal('dog', 'Dog');
    const cat = new Animal('cat', 'Cat');

    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);

    expect(animalShelter.dequeue('rabbit')).toBe(null);
    expect(animalShelter.dequeue('')).toBe(null);
    expect(animalShelter.dequeue(123)).toBe(null);
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
