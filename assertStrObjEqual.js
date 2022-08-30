const assertStrObjEqual = function (actual, expected) {
  let result = false;
  if (typeof expected === 'object'){
    result = JSON.stringify(actual) === JSON.stringify(expected);
    //actual = JSON.stringify (actual)
    //expected = JSON.stringify(expected)
  } else {
    result = actual === expected;
  }
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertStrObjEqual;