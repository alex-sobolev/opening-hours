import { getNextDay } from './getNextDay';

test('should return next day for Monday', () => {
  const day = 'monday';
  const expected = 'tuesday';

  expect(getNextDay(day)).toEqual(expected);
});

test('should return next day for Tuesday', () => {
  const day = 'tuesday';
  const expected = 'wednesday';

  expect(getNextDay(day)).toEqual(expected);
});

test('should return next day for Wednesday', () => {
  const day = 'wednesday';
  const expected = 'thursday';

  expect(getNextDay(day)).toEqual(expected);
});

test('should return next day for Thursday', () => {
  const day = 'thursday';
  const expected = 'friday';

  expect(getNextDay(day)).toEqual(expected);
});

test('should return next day for Friday', () => {
  const day = 'friday';
  const expected = 'saturday';

  expect(getNextDay(day)).toEqual(expected);
});

test('should return next day for Saturday', () => {
  const day = 'saturday';
  const expected = 'sunday';

  expect(getNextDay(day)).toEqual(expected);
});

test('should return next day for Sunday', () => {
  const day = 'sunday';
  const expected = 'monday';

  expect(getNextDay(day)).toEqual(expected);
});
