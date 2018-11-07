'use strict';

const radixSort = require('../src/radix/radix');

describe('#radix.js', () => {
  test('Should return a sorted list', () => {
    let testArray1 = [9, 5, 6, 2, 3, 1, 4, 8, 91];
    expect(radixSort.sort(testArray1)).toEqual(true);
  });

  test('should return false if no chessboard is given', () => {
    expect(BishSlap()).toEqual(false);
  });

  test('should return false if pawn is not within range of bishop', () => {
    expect(BishSlap(chessBoardTwo)).toEqual(false);
  });
});