import { Box, Typography } from '@mui/material';
import React from 'react';

interface StepProps {
  stepNumber: number;
  active: boolean;
}

const Step: React.FC<StepProps> = ({ stepNumber, active }) => {
  return (
    <Box
      borderRadius={50}
      // height={50}
      width={50}
      // flexGrow={1}
      sx={{
        bgcolor: (theme) => (active ? theme.palette.primary.main : '#fff'),
        aspectRatio: '1',
        border: (theme) =>
          active ? undefined : `1px solid ${theme.palette.grey[300]}`,
        width: {
          xs: 30,
          md: 50,
        },
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontSize={20} color={active ? '#fff' : '#6A728B'}>
        {stepNumber}
      </Typography>
    </Box>
  );
};

export default Step;
