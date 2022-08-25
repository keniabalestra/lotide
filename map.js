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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TES CASE 1
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

//TEST CASE 2
const ages = [48, 36, 33, 30];
assertArraysEqual(map(ages, age => age * 2), [96,72,66,60]);


//TEST CASE 3
let sisters = [
  {firstName : "Kenia", middleName: "Cristina"},
  {firstName : "Aline", middleName: "Gabrielle"},
  {firstName : "Jessika", middleName: "Juliana"}
];
assertArraysEqual(map(sisters,(sisters) =>`${sisters.firstName} ${sisters.middleName}`), ["Kenia Cristina", "Aline Gabrielle", "Jessika Juliana"]);

