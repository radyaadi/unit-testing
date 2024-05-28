function palindrome(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}

export default palindrome;
