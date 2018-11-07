'use strict';

const radixSort = module.exports = {};

radixSort.sort = (array) => {
  if (!array) {
    return undefined;
  }
  if (array.length <= 1) {
    return array;
  }
  let radix;
  let length1 = array.length;
  const length2 = 10;
  let radixKey;
  const radices = {};
  let buckets = {};
  let current;
  let currentLength;
  let currentBucket;

  for (let i = 0; i < array.length; i++) {
    radices[array[i].toString().length] = 0;
  }
  for (radix in radices) { //eslint-disable-line
    for (let b = 0; b < array.length; b++) {
      current = array[b];
      currentLength = current.toString().length;
      if (currentLength >= radix) {
        radixKey = current.toString()[currentLength - radix];
        if (!buckets.hasOwnProperty(radixKey)) { //eslint-disable-line
          buckets[radixKey] = [];
        }
        buckets[radixKey].push(current);
      } else {
        if (!buckets.hasOwnProperty('0')) { //eslint-disable-line
          buckets['0'] = [];
        }
        buckets['0'].push(current);
      }
    }
    let index1 = 0;
    for (let n = 0; n < length2; n++) {
      if (buckets[n] != null) {
        currentBucket = buckets[n];
        length1 = currentBucket.length;
        for (let x = 0; x < length1; x++) {
          array[index1] = currentBucket[x];
          index1 += 1;
        }
      }
    }
    buckets = {};
  }
  return array;
};
