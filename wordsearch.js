//

const transpose = (letters) => {
  let transposed = [];

  for (let i = 0; i < letters[0].length; i++) {
    let transposedColumn = [];

    for (let j = 0; j < letters.length; j++) {
      transposedColumn.push(letters[j][i]);
    }

    transposed.push(transposedColumn);
  }

  return transposed;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const lettersTransposed = transpose(letters);

  const verticalJoin = lettersTransposed.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;