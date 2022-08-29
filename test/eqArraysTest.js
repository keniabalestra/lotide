const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), true);
assertEqual(eqArrays([3, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["Cake", "Muffin", "Candy"], ["Cake", "Muffin", "Candy"]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays([], [1, 2, 3]), true);
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true);