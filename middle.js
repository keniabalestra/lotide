const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      return [];
    } else if (arr.length % 2 !== 0) {
      return [arr[(arr.length - 1) / 2]];
    } else if (arr.length % 2 === 0 && arr.length >= 4) {
      let middle1 = arr[(arr.length / 2) - 1];
      let middle2 = arr[arr.length / 2];
      return [middle1, middle2];
    }
  }
};

assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4]);
assertArraysEqual(middle(["a", "b", "c", 4, 5, 6]), ["c", 4]);