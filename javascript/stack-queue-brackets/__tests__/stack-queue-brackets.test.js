const validateBrackets = require('../index');


describe('validateBrackets', () => {
  test('should return true for valid brackets', () => {
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('([])')).toBe(true);
    expect(validateBrackets('({})')).toBe(true);
    expect(validateBrackets('[{()}]')).toBe(true);
  });

  test('should return false for invalid brackets', () => {
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets('[}')).toBe(false);
    expect(validateBrackets('{]')).toBe(false);
    expect(validateBrackets('({}')).toBe(false);
    expect(validateBrackets('([)]')).toBe(false);
    expect(validateBrackets('[{()}')).toBe(false);
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets(']')).toBe(false);
    expect(validateBrackets(')(')).toBe(false);
    expect(validateBrackets('({)}')).toBe(false);
    expect(validateBrackets('[({})]')).toBe(false);
  });
});
