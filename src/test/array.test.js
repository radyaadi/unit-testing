import { sortArrayAscending, sortArrayDescending } from '../function/array';

test('sortArrayAscending sorts array func in ascending order', () => {
  expect(sortArrayAscending([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
});

test('sortArrayDescending sorts array func in descending order', () => {
  expect(sortArrayDescending([5, 3, 8, 1, 2])).toEqual([8, 5, 3, 2, 1]);
});
