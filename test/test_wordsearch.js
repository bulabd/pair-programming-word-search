const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['B', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['H', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['O', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['R', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['R', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['N', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['T', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ABHORRENT')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['B', 'E', 'I', 'B', 'F', 'E', 'L', 'D'],
      ['H', 'F', 'C', 'H', 'Q', 'U', 'A', 'L'],
      ['L', 'M', 'J', 'O', 'E', 'V', 'R', 'G'],
      ['R', 'H', 'C', 'R', 'Y', 'E', 'R', 'L'],
      ['R', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
      ['N', 'D', 'C', 'N', 'K', 'U', 'A', 'S'],
      ['T', 'Z', 'K', 'T', 'Q', 'U', 'A', 'L'],
    ], 'ABHORRENT')

    assert.isTrue(result);
  });

  it("should return false if empty array", function() {
    const result = wordSearch([
      []
    ], "hello")
    
    assert.isFalse(result);
  });
});
