import { toHourString } from './toHourString';

test('should convert seconds to AM hour string', () => {
  const val = 32400;
  const expected = '9 AM';

  expect(toHourString(val)).toEqual(expected);
});

test('should convert seconds to PM hour string', () => {
  const val = 82800;
  const expected = '11 PM';

  expect(toHourString(val)).toEqual(expected);
});

test('should return 12 PM when seconds equal to 12 hours', () => {
  const val = 43200;
  const expected = '12 PM';

  expect(toHourString(val)).toEqual(expected);
});
