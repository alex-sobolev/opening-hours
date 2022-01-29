import { FC } from 'react';
import { Box } from '@mui/material';
import { DayHours } from './DayHours';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
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
      {days.map(day => (
        <DayHours
          key={day}
          day={day}
          isClosed={false}
          isToday={day === currentDay}
          openingTime={openingTimeTest}
        />
      ))}
    </Box>
  );
};
