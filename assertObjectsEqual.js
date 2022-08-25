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

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  } else {
    for (let key of objKeys1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true; //The value for each key in one object is the same as the value for that same key in the other object
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,{ c: "1", d: ["2", 3] });
assertObjectsEqual(dc,{ c: "1", d: ["2", 3] });
assertObjectsEqual(dc,{ c: "1", d: ["2", 4] });