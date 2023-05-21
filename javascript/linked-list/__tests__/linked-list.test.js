'use strict';

const LinkedList = require('./index');

describe('Link List', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).tobeNull();
  });
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    // Can properly insert multiple nodes into the linked list
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).tobeNull();
    list.append('a');
    expect(list.head.next.next.value).toEqual('a');
  });
});
