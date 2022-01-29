import { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '12px',
        }}
      >
        <AccessTimeIcon
          sx={{
            marginRight: '8px',
            color: '#a1a2a4',
          }}
        />
        <Typography
          sx={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
          }}
        >
          Opening Hours
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: '#000000',
        }}
      />
    </Box>
  );
};
