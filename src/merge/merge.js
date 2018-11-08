'use strict';

const mergeSort = module.exports = {};

// ========================================================================================
// ========================================================================================
mergeSort.sort = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  if (array.length <= 1) {
    return array;
  }
  return mergeSort.mergeSortHelper(array);
};
// ========================================================================================
// ========================================================================================


// ========================================================================================
// ========================================================================================
mergeSort.mergeSortHelper = (array) => {
  // BASE ========================================
  if (array.length === 1) {
    return array;
  }
  // RECURSIVE ====================================
  const middleIndex = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  return mergeSort.merge(mergeSort.mergeSortHelper(leftArray),
    mergeSort.mergeSortHelper(rightArray));
};
// ========================================================================================
// ========================================================================================

// ========================================================================================
// ========================================================================================
mergeSort.merge = (preSortedLeft, preSortedRight) => {
  const sortedValues = [];
  while (preSortedLeft.length > 0 && preSortedRight.length > 0) {
    if (preSortedLeft[0] <= preSortedRight[0]) {
      sortedValues.push(preSortedLeft.shift());
    } else {
      sortedValues.push(preSortedRight.shift());
    }
  }
  if (preSortedLeft.length > 0) {
    sortedValues.push(...preSortedLeft);
  }
  if (preSortedRight.length > 0) {
    sortedValues.push(...preSortedRight);
  }
  return sortedValues;
};
// ========================================================================================
// ========================================================================================
