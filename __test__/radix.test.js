'use strict';

const radixSort = require('../src/radix/radix');

const testArray1 = [9, 5, 6, 2, 3, 1, 4];
const emptyArray = [];

describe('#radix.js', () => {
  test('Should return a sorted list', () => {
    const newArray = radixSort.sort(testArray1);
    expect(newArray).toEqual([1, 2, 3, 4, 5, 6, 9]);
  });

  test('should return undefined if there is no array passed into arguments', () => {
    expect(radixSort.sort()).toEqual(undefined);
  });

  test('should immediately return array if it has one or zero elements', () => {
    expect(radixSort.sort(emptyArray)).toEqual(emptyArray);
  });
});
