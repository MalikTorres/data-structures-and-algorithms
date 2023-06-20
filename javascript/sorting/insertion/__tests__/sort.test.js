'use strict';

const { insertionSort } = require('./index');

// Import the function to be tested

describe('InsertionSort', () => {
  // Test Case 1: Basic scenario
  it('should sort the array in ascending order', () => {
    const input1 = [5, 2, 4, 6, 1, 3];
    const expected1 = [1, 2, 3, 4, 5, 6];
    const result1 = insertionSort(input1);
    expect(result1).toEqual(expected1);
  });

  // Test Case 2: Empty input array
  it('should return an empty array for an empty input', () => {
    const input2 = [];
    const expected2 = [];
    const result2 = insertionSort(input2);
    expect(result2).toEqual(expected2);
  });

  // Test Case 3: Input array with a single element
  it('should return the input array as it is for a single element', () => {
    const input3 = [7];
    const expected3 = [7];
    const result3 = insertionSort(input3);
    expect(result3).toEqual(expected3);
  });

  // Test Case 4: Input array with duplicate elements
  it('should sort the array with duplicate elements', () => {
    const input4 = [3, 2, 1, 2, 3];
    const expected4 = [1, 2, 2, 3, 3];
    const result4 = insertionSort(input4);
    expect(result4).toEqual(expected4);
  });

  // Test Case 5: Input array already sorted
  it('should return the input array as it is if it is already sorted', () => {
    const input5 = [1, 2, 3, 4, 5];
    const expected5 = [1, 2, 3, 4, 5];
    const result5 = insertionSort(input5);
    expect(result5).toEqual(expected5);
  });
});
