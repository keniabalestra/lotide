const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertEqual;

//**REVIEW CODE FROM GARY 2022-08-26**
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };
