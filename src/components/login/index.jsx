import { Box, Typography } from '@mui/material';
import React from 'react';

const LoginComponent = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Box>
        <Typography variant='h3'>Welcome Back</Typography>
        <Typography variant='body2'>Login to your account</Typography>
      </Box>

      <Box></Box>
    </Box>
  );
};

export default LoginComponent;
