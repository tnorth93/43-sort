'use strict';

const mergeSort = require('../src/merge/merge');

const testArray1 = [12, 98, 67, 44, 31, 15, 76, 82];
const emptyArray = [];

describe('#merge.js', () => {
  test('Should return a sorted list', () => {
    const newArray = mergeSort.sort(testArray1);
    expect(newArray).toEqual([12, 15, 31, 44, 67, 76, 82, 98]);
  });

  test('should throw error if there is no array passed into arguments', () => {
    expect(() => {
      mergeSort.sort();
    }).toThrowError('Input must be an array');
  });

  test('should immediately return array if it has one or zero elements', () => {
    expect(mergeSort.sort(emptyArray)).toEqual(emptyArray);
  });
});
