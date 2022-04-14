//Check to find the word horizontally and vertically
//Return true if the word is found, and return false if the word is not found


const transpose = function(matrix) {
    const newMatrix = [];
    for(let i = 0; i < matrix[0].length; i++){
      const newArray = [];
      for(let j = 0; j < matrix.length; j++) {
        newArray.push(matrix[j][i]);
      }
    newMatrix.push(newArray);
    }
    return newMatrix;
  }


const wordSearch = (letters, word) => { 
    const transposedLet = transpose(letters);
    const verticalJoin = transposedLet.map(ls => ls.join(''))
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch