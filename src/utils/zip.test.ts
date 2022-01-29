import { zip } from './zip';

test('should zip two array together', () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ['a', 'b', 'c', 'd', 'e'];
  const expected = [
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
    [4, 'd'],
    [5, 'e'],
  ];

  expect(zip(arr1, arr2)).toEqual(expected);
});
