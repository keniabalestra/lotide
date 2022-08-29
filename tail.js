const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let finalArray = [];
const tail = function (array) {
  for (let i = 1; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
};

//TEST CODE:
console.log(tail(["Cake"]));
console.log(tail([]));

const originalArray = ["Double", "Strawberry", "Cake"];
const outcome = tail(originalArray);
assertEqual(originalArray.length, 3); //Checks the original array length;
assertEqual(outcome.length, 2); //Checks the tail array length;
assertEqual(outcome[0], "Strawberry");
assertEqual(outcome[1], "Strawberry");

//CODE REVIEW FROM GARY 2022-08-26

// const tail = function(array){
 
// return array.slice(1);
// };