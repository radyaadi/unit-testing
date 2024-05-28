import palindrome from '../function/palindrome';

test('palindrome func returns true for palindromes', () => {
  expect(palindrome('madam')).toBe(true);
  expect(palindrome('racecar')).toBe(true);
});

test('palindrome func returns false for non-palindromes', () => {
  expect(palindrome('hello')).toBe(false);
  expect(palindrome('world')).toBe(false);
});
