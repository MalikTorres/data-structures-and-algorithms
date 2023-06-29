'use strict';

const leftJoin = require('./index');

describe('leftJoin', () => {
  it('should perform a LEFT JOIN operation on two hashmaps', () => {
    const synonyms = {
      'happy': 'joyful',
      'sad': 'unhappy',
      'big': 'large',
    };

    const antonyms = {
      'happy': 'sad',
      'small': 'big',
      'up': 'down',
    };

    const result = leftJoin(synonyms, antonyms);

    expect(result).to.deep.equal({
      'happy': ['joyful', 'sad'],
      'sad': ['unhappy', null],
      'big': ['large', null]
    });
  });

  it('should handle empty hashmaps', () => {
    const synonyms = {};
    const antonyms = {};

    const result = leftJoin(synonyms, antonyms);

    expect(result).to.deep.equal({});
  });

  it('should handle missing keys in the antonyms hashmap', () => {
    const synonyms = {
      'happy': 'joyful',
      'sad': 'unhappy',
    };

    const antonyms = {
      'happy': 'sad',
    };

    const result = leftJoin(synonyms, antonyms);

    expect(result).to.deep.equal({
      'happy': ['joyful', 'sad'],
      'sad': ['unhappy', null],
    });
  });
});
