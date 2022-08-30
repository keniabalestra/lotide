const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) { //check if callback is truthy
      return key;
    }
  }
};



module.exports = findKey;