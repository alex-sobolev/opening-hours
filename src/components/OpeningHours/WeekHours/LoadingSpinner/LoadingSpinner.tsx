import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const LoadingSpinner: FC = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress size={64} thickness={3} />
  </Box>
);
