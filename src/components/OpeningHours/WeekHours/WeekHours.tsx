import { FC } from 'react';
import { Box } from '@mui/material';
import { DayHours } from './DayHours';
import { OpeningHoursData, Day } from '../../../models';
import { toOpeningTimeString } from '../../../utils/toOpeningTimeString';
import test from './testData.json';

const testData = test as OpeningHoursData;

const days: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const currentDay = days[new Date().getDay() - 1];

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
        const openingTime = isClosed ? null : toOpeningTimeString(day, testData);

        return (
          <DayHours
            key={day}
            day={day}
            isClosed={isClosed}
            isToday={day === currentDay}
            openingTime={openingTime}
          />
        );
      })}
    </Box>
  );
};
