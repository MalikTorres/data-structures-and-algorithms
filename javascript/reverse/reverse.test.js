const { Node, LinkedList } = require('../reverse/index.js');

describe('LinkedList', () => {
  test('reverse should reverse the linked list', () => {
    const list = new LinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    list.head = node1;
    node1.next = node2;
    node2.next = node3;
    list.tail = node3;

    list.reverse();

    expect(list.head).toBe(node3);
    expect(list.tail).toBe(node1);
    expect(node1.next).toBe(node2);
    expect(node2.next).toBe(node3);
    expect(node3.next).toBeNull();
  });
});
