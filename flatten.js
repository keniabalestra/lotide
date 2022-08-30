const flatten = function (arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const i of item) {
        result.push(i)
      }
    } else {
      result.push(item);
    }
  }
 return result;
};




module.exports = flatten;