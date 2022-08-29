const middle = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      return [];
    } else if (arr.length % 2 !== 0) {
      return [arr[(arr.length - 1) / 2]];
    } else if (arr.length % 2 === 0 && arr.length >= 4) {
      let middle1 = arr[(arr.length / 2) - 1];
      let middle2 = arr[arr.length / 2];
      return [middle1, middle2];
    }
  }
};

module.exports = middle;

