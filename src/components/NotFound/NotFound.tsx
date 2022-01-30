import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const onGoHomeBtnClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '4rem',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'red',
        }}
      >
        404: Page Not Found
      </Typography>
      <Button
        variant="contained"
        onClick={onGoHomeBtnClick}
        sx={{
          marginTop: '1rem',
        }}
      >
        Take me home
      </Button>
    </Box>
  );
};
