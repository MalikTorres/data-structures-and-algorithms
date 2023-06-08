const { Stack, PseudoQueue } = require('./index');

describe('Stack', () => {
  it('should push values onto the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.top.value).toBe(30);
    expect(stack.top.next.value).toBe(20);
    expect(stack.top.next.next.value).toBe(10);
  });

  it('should pop values from the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.isEmpty()).toBe(true);
  });
});

describe('PseudoQueue', () => {
  it('should enqueue values into the pseudo queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.firstStack.top.value).toBe(10);
    expect(queue.firstStack.top.next.value).toBe(20);
    expect(queue.firstStack.top.next.next.value).toBe(30);
  });

  it('should dequeue values from the pseudo queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
    expect(queue.firstStack.isEmpty()).toBe(true);
    expect(queue.secondStack.isEmpty()).toBe(true);
  });

  it('should throw an error when dequeueing from an empty queue', () => {
    const queue = new PseudoQueue();

    expect(() => {
      queue.dequeue();
    }).toThrowError('Queue is empty');
  });
});
