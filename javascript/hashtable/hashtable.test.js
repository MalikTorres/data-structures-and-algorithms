'use strict';

// Import the assert module for test assertions
const assert = require('assert');

// Import the HashTable class
const HashTable = require('..hastable/hashTable/');

// Create a new instance of HashTable
const table = new HashTable(1024);

// Test the set() method
table.set('Malik', 'this is my value');
table.set('John', 'another value');
table.set('Jane', 'yet another value');

// Test the get() method
assert.strictEqual(table.get('Malik'), 'this is my value');
assert.strictEqual(table.get('John'), 'another value');
assert.strictEqual(table.get('Jane'), 'yet another value');

// Test the has() method
assert.strictEqual(table.has('Malik'), true);
assert.strictEqual(table.has('John'), true);
assert.strictEqual(table.has('Jane'), true);
assert.strictEqual(table.has('Alice'), false); // Non-existent key

// Test the keys() method
const keys = table.keys();
assert.deepStrictEqual(keys, ['Malik', 'John', 'Jane']);

// Print a success message if all assertions pass
console.log('All tests passed!');
