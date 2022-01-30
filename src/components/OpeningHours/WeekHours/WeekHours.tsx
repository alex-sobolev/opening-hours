import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import { DayHours } from './DayHours';
import { ApiStatus, Day } from '../../../models';
import { toOpeningTimeString } from '../../../utils/toOpeningTimeString';
import { useRootStore } from '../../../stores';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMsg } from './ErrorMsg';

const days: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const currentDayIndex = new Date().getDay() - 1; // because sunday is the first day in `getDay()` implementation
const currentDay = days[currentDayIndex < 0 ? 6 : currentDayIndex];

interface Props {}

export const WeekHours: FC<Props> = observer(() => {
  const { openingHoursStore } = useRootStore();
  const { apiStatus, data, fetchData } = openingHoursStore;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box
      sx={{
        marginTop: '16px',
      }}
    >
      {apiStatus === ApiStatus.Loading && <LoadingSpinner />}
      {apiStatus === ApiStatus.Error && <ErrorMsg />}
      {apiStatus === ApiStatus.Success &&
        days.map(day => {
          const dayData = data[day];
          const isClosed = dayData.length === 0;
          const openingTime = isClosed ? null : toOpeningTimeString(day, data);

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
});
