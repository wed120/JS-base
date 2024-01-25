"use strict";

const arr = [1, 4, 3, 2, 5, 0, 87, 17, 6, -3, -1];

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const index = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = index;
      }
    }
  }
  return arr;
};

console.log(sort(arr));
