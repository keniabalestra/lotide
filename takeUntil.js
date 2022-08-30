const takeUntil = function(array, callback) {
  let result = [];
  for (let arr of array) {
    if (!callback(arr)) { //check if callback is truthy
      result.push(arr);
    } else {
      return result;  //returns array with all arr until condition is met.
    }
  }
};


module.exports = takeUntil;