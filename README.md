# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @keniabalestra/lotide`

**Require it:**

`const _ = require('@keniabalestra/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array):` Returns the first item of an array;
- `middle(array):` Returns the middle value of an array if it's length is odd; Returns the middles values of an array if it's length is even; returns an empty array if it's length is equal to two or less;
- `tail(array):` Returns the array without the firs item;
- `countLetters(string):` Returns an object with a count of each letter in a string;
- `countOnly(array, object):` Returns an object with the count of keys given the value of true in the array;
- `eqArrays(array1, array2):` Returns booleans values after comparing each item of 2 arrays;
- `eqObjects(object1, object2):` Returns booleans values after comparing each item of 2 objects;
- `findKey(object, callback):` Returns the key if the callback is true;
- `findKeyByValue(object, value):` Returns the key which contains the given value;

- `flatten(array):` Returns a flattened array from a nested array;
- `letterPositions(string):` Returns an object containing key(letter) value(index) pairs;
- `map(array, callback):` Returns a new array with the results of the callback function;
- `takeUntil(array, callback):` Returns a new array with the items until the callback is truthy;
- `without(array1, array2):` Returns a new array with the elements of array1 without the elements of array2.
