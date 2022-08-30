const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    if (currentLetter !== " ") {
      if (result[currentLetter]) {
        result[currentLetter].push(i);

      } else {
        result[currentLetter] = [i];
      }
    }
  }
  return result;
};


module.exports = letterPositions;