import { FC } from 'react';
import { Box } from '@mui/material';
import { DayHours } from './DayHours';

type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

type TimeType = 'open' | 'close';

interface Time {
  type: TimeType;
  value: number;
}

interface OpeningHoursData {
  monday: Time[];
  tuesday: Time[];
  wednesday: Time[];
  thursday: Time[];
  friday: Time[];
  saturday: Time[];
  sunday: Time[];
}

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

const days: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const currentDay = days[new Date().getDay() - 1];

const openingTimeTest = '9 AM - 10 PM';

interface Props {}

export const WeekHours: FC<Props> = () => {
  return (
    <Box
      sx={{
        marginTop: '16px',
      }}
    >
      {days.map(day => {
        const dayData = testData[day];
        const isClosed = dayData.length === 0;

        return (
          <DayHours
            key={day}
            day={day}
            isClosed={isClosed}
            isToday={day === currentDay}
            openingTime={openingTimeTest}
          />
        );
      })}
    </Box>
  );
};
