const assertStrObjEqual = require('../assertStrObjEqual')
const countLetters = require('../countLetters')

const test = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
const test2 = {P: 2, e: 8, t: 1, r: 3, i: 3, p: 7, c: 3,k: 3,d: 2,a: 1,o: 1,f: 1,l: 1,s: 1}

assertStrObjEqual(countLetters("lighthouse in the house"), test)
assertStrObjEqual(countLetters("Peter Piper picked a peck of pickled peppers"), test2);