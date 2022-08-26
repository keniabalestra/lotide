const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function (arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const i of item) {
        result.push(i)
      }
    } else {
      result.push(item);
    }
  }
 return result;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[ 1, 2, 3, 4, 5, 6 ] )
assertArraysEqual(flatten(["champagne", ["supernova", "in"], ["the"], "sky"]),[ 'champagne', 'supernova', 'in', 'the', 'sky' ] )
