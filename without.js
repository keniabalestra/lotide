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

const without = function (source, itemsToRemove) {
  let filtered = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      filtered.push(source[i]);
    }
  }
  return filtered;
};


//TEST CODE
let result1 = without(["1", "2", "3"], [1, 2, "3"]);
let result2 = without([1, 2, 3], [3]);
let result3 = without([4], [3]);


assertArraysEqual(without([2, 3, 1, 4], [1]), [2, 3, 4]);
assertArraysEqual(result1, [1, 2]);
assertArraysEqual(result2, [1, 2]);
assertArraysEqual(result3, [2, 3]);

//TEST CASE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);