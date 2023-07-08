const { LinkedList, Node }= require('./index');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.head = new Node(1);
    linkedList.head.next = new Node(2);
    linkedList.head.next.next = new Node(3);
    linkedList.head.next.next.next = new Node(4);
  });

  it('should remove a node from the linked list', () => {
    linkedList.removeNode(2);

    expect(linkedList.head.data).toBe(1);
    expect(linkedList.head.next.data).toBe(3);
    expect(linkedList.head.next.next.data).toBe(4);
    expect(linkedList.head.next.next.next).toBeNull();
  });

  it('should remove the head node correctly', () => {
    linkedList.removeNode(1);

    expect(linkedList.head.data).toBe(2);
    expect(linkedList.head.next.data).toBe(3);
    expect(linkedList.head.next.next.data).toBe(4);
    expect(linkedList.head.next.next.next).toBeNull();
  });

  it('should handle removing a node not found in the linked list', () => {
    linkedList.removeNode(5);

    expect(linkedList.head.data).toBe(1);
    expect(linkedList.head.next.data).toBe(2);
    expect(linkedList.head.next.next.data).toBe(3);
    expect(linkedList.head.next.next.next.data).toBe(4);
  });
});
