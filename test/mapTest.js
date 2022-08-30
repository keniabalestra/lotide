const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

//TEST CASE 1
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

//TEST CASE 2
const ages = [48, 36, 33, 30];
assertArraysEqual(map(ages, age => age * 2), [96, 72, 66, 60]);


//TEST CASE 3
let sisters = [
  { firstName: "Kenia", middleName: "Cristina" },
  { firstName: "Aline", middleName: "Gabrielle" },
  { firstName: "Jessika", middleName: "Juliana" }
];
assertArraysEqual(map(sisters, (sisters) => `${sisters.firstName} ${sisters.middleName}`), ["Kenia Cristina", "Aline Gabrielle", "Jessika Juliana"]);
