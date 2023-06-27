'use strict';

// Import the assert module for test assertions
const assert = require('assert');

// Import the HashTable class
const HashTable = require('./hashTable/hashtable');

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

// Test the repeatedWord() function
function repeatedWord(string) {
  const wordCount = {};

  const words = string.split(' ');

  for (let word of words) {
    word = word.toLowerCase();

    if (wordCount[word]) {
      return word;
    } else {
      wordCount[word] = 1;
    }
  }

  // No repeated words found
  return null;
}

// Test cases for repeatedWord()
assert.strictEqual(repeatedWord('hello world hello'), 'hello');
assert.strictEqual(repeatedWord('the quick brown fox jumps over the lazy dog'), null);
assert.strictEqual(repeatedWord('a b c d e f g a b c'), 'a');
assert.strictEqual(repeatedWord('apple banana cherry apple banana'), 'apple');
assert.strictEqual(repeatedWord('repeated repeated repeated'), 'repeated');

// Print a success message if all assertions pass
console.log('All tests passed!');

