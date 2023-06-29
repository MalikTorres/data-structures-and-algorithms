'use strict';

function leftJoin(synonyms, antonyms) {
  const result = {};

  for (let key of Object.keys(synonyms)) {
    const synonym = synonyms[key];
    const antonym = antonyms[key] || null;
    result[key] = [synonym, antonym];
  }

  return result;
}

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

module.exports =  leftJoin;

