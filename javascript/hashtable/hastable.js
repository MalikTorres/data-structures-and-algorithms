'use strict';

class HasTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  hash(key) {
    let characters = key.split('');
    // use the reducer pattern (for review)
    let asciSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    console.log('asciSum', asciSum);


    let initialHash = asciSum * 599;

    return initialHash % this.size;
  }
  set(key, value) {
    let placement = this.hash(key);


    let info = { [key]: value };

    this.buckets[placement] = info;
  }

  get(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      return this.buckets[position][key];
    }
  }

  has(key) {
    let position = this.hash(key);
    let results = this.buckets[position] ? true : false;
    return results;
  }

  keys() {
    let results = this.buckets.reduce((keysArr, bucket) => {
      if (bucket) {

        return [...keysArr, ...Object.keys(bucket)];
      }
    }, []);
    return results;
  }

  repeatedWord(string) {
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
}






const table = new HasTable(1024);

console.log('table:', table);

let hashOne = table.hash('Malik');

console.log('hashOne:', hashOne);

table.set('Malik', 'this is my value');


console.log('updated table:', table);
