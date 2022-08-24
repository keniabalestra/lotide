const assertEqual = function (actual, expected) {
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

const countLetters = function (str) {
  let result = {};
  for (const letter of str) {
    if (letter === " ") {
      result = result;
    } else if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

const test = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
const test2 = {P: 2, e: 8, t: 1, r: 3, i: 3, p: 7, c: 3,k: 3,d: 2,a: 1,o: 1,f: 1,l: 1,s: 1}

assertEqual(countLetters("lighthouse in the house"), test)
assertEqual(countLetters("Peter Piper picked a peck of pickled peppers"), test2);
//JSON.stringify(one) === JSON.stringify(two);