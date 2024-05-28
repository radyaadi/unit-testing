function loopingNumber(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('fish bash');
    } else if (i % 3 === 0) {
      result.push('fish');
    } else if (i % 5 === 0) {
      result.push('bash');
    } else {
      result.push(i);
    }
  }

  return result;
}

export default loopingNumber;
