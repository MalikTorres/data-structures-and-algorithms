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

  test('returns true if included, false if not', () => {
    const list = new LinkedList();
    list.insert(2);
    list.insert(1);
    expect(list.includes(1)).toBeTruthy();
    expect(list.includes('apple')).toBeFalsey();
  });

  test('can be rendered as an expected string', () => {
    const list = new LinkedList();
    list.insert('c');
    list.insert('b');
    list.insert('a');

    test('returns zip linked list with alternating nodes', () => {

    })
  });
  // '{ a } -> { b } -> { c } -> NULL'
  //expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');

  //test('')



});
