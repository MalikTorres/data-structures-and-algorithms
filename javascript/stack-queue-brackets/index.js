function validateBrackets(string) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];

  for (let i = 0; i < string.length; i++) {
    const currentBracket = string[i];

    if (openingBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else if (closingBrackets.includes(currentBracket)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentBracket)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = validateBrackets;
