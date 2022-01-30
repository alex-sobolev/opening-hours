import { FC } from 'react';
import { Box } from '@mui/material';

export const ErrorMsg: FC = () => (
  <Box
    sx={{
      color: 'red',
    }}
  >
    An error occurred. Please try again later.
  </Box>
);
