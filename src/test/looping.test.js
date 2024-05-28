import loopingNumber from '../function/looping';

test('loopingNumber func returns correct output', () => {
  expect(loopingNumber(15)).toEqual([
    1,
    2,
    'fish',
    4,
    'bash',
    'fish',
    7,
    8,
    'fish',
    'bash',
    11,
    'fish',
    13,
    14,
    'fish bash',
  ]);
});
