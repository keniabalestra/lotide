const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("returns the middle item of an array, if array.length is odd", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns the 2 middle items of an array, if array.length is even", () => {
    assert.deepEqual(middle([1, 2, 6, 9]), [2, 6]);
  });
});

