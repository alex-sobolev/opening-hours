import { toOpeningTimeString } from './toOpeningTimeString';
import { OpeningHoursData } from '../models';

const testData: OpeningHoursData = {
  monday: [],
  tuesday: [
    {
      type: 'open',
      value: 36000,
    },
    {
      type: 'close',
      value: 64800,
    },
  ],
  wednesday: [],
  thursday: [
    {
      type: 'open',
      value: 36000,
    },
    {
      type: 'close',
      value: 64800,
    },
  ],
  friday: [
    {
      type: 'open',
      value: 36000,
    },
  ],
  saturday: [
    {
      type: 'close',
      value: 3600,
    },
    {
      type: 'open',
      value: 36000,
    },
  ],
  sunday: [
    {
      type: 'close',
      value: 3600,
    },
    {
      type: 'open',
      value: 43200,
    },
    {
      type: 'close',
      value: 75600,
    },
  ],
};

test('should return opening time formatted string when there is 1 open and 1 close times for a given day', () => {
  const day = 'thursday';
  const data: OpeningHoursData = { ...testData };
  const expected = '10 AM - 6 PM';

  expect(toOpeningTimeString(day, data)).toEqual(expected);
});

test('should return opening time formatted string when there is more than 1 open and 1 close times for a given day', () => {
  const day = 'saturday';
  const data: OpeningHoursData = {
    ...testData,
    saturday: [
      {
        type: 'open',
        value: 32400,
      },
      {
        type: 'close',
        value: 39600,
      },
      {
        type: 'open',
        value: 57600,
      },
      {
        type: 'close',
        value: 82800,
      },
    ],
  };
  const expected = '9 AM - 11 AM, 4 PM - 11 PM';

  expect(toOpeningTimeString(day, data)).toEqual(expected);
});

test('should drop close time related to previous day and return opening time formatted string', () => {
  const day = 'saturday';
  const data: OpeningHoursData = {
    ...testData,
    saturday: [
      {
        // should be ignored
        type: 'close',
        value: 3600,
      },
      {
        type: 'open',
        value: 32400,
      },
      {
        type: 'close',
        value: 39600,
      },
      {
        type: 'open',
        value: 57600,
      },
      {
        type: 'close',
        value: 82800,
      },
    ],
  };
  const expected = '9 AM - 11 AM, 4 PM - 11 PM';

  expect(toOpeningTimeString(day, data)).toEqual(expected);
});

test('should take close time from next day when close time spills over to next day', () => {
  const day = 'friday';
  const data: OpeningHoursData = {
    ...testData,
    friday: [
      {
        type: 'open',
        value: 64800,
      },
    ],
    saturday: [
      {
        type: 'close',
        value: 3600,
      },
      {
        type: 'open',
        value: 32400,
      },
      {
        type: 'close',
        value: 39600,
      },
      {
        type: 'open',
        value: 57600,
      },
      {
        type: 'close',
        value: 82800,
      },
    ],
  };
  const expected = '6 PM - 1 AM';

  expect(toOpeningTimeString(day, data)).toEqual(expected);
});
