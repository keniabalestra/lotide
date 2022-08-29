const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4]);
assertArraysEqual(middle(["a", "b", "c", 4, 5, 6]), ["c", 4]);