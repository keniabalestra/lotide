const assertArraysEqual = require(('../assertArraysEqual'));

//TEST
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, "2", 3], [1, 2, 3]);