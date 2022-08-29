const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE:
const originalArray = ["Double", "Strawberry", "Cake"];
const outcome = tail(originalArray);
assertEqual(originalArray.length, 3); //Checks the original array length;
assertEqual(outcome.length, 2); //Checks the tail array length;
assertEqual(outcome[0], "Strawberry");
assertEqual(outcome[1], "Strawberry");