import { FC } from 'react';
import { Box, Divider } from '@mui/material';

const Day: FC<{ day: string }> = ({ day }) => (
  <Box
    component="span"
    sx={{
      textTransform: 'capitalize',
      fontWeight: 'bold',
    }}
  >
    {day}
  </Box>
);

const Today: FC = () => {
  const today = 'TODAY';

  return (
    <Box
      component="span"
      sx={{
        fontSize: '0.8rem',
        color: '#5bcb02',
        marginLeft: '8px',
      }}
    >
      {today}
    </Box>
  );
};

const Closed: FC = () => (
  <Box
    sx={{
      color: '#a1a2a4',
    }}
  >
    Closed
  </Box>
);

interface Props {
  day: string;
  isClosed: boolean;
  isToday: boolean;
  openingTime: string | null;
}

export const DayHours: FC<Props> = ({ day, isClosed, openingTime, isToday }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '8px',
          paddingBottom: '8px',
        }}
      >
        <Box>
          <Day day={day} />
          {isToday && <Today />}
        </Box>
        {isClosed ? <Closed /> : <Box>{openingTime}</Box>}
      </Box>
      <Divider />
    </Box>
  );
};
