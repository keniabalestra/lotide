const tail = function(array) {
  let finalArray = [];
  for (let i = 1; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
};

module.exports = tail;


//CODE REVIEW FROM GARY 2022-08-26
// const tail = function(array){
// return array.slice(1);
// };