import { FC } from 'react';
import { Box, Paper } from '@mui/material';
import { Header } from './Header';
import { WeekHours } from './WeekHours';

interface Props {}

export const OpeningHours: FC<Props> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem',
      }}
    >
      <Paper
        sx={{
          width: '320px',
          padding: '24px',
        }}
      >
        <Header />
        <WeekHours />
      </Paper>
    </Box>
  );
};
