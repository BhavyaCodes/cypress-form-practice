import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { FC } from 'react';
import { Steps } from '..';
import Step from './Step';

interface StepperProps {
  step: Steps;
  title?: string | null;
  subtitle?: string | null;
}

const percentWidths: Record<Steps, string> = {
  '1': '16%',
  '2': '50%',
  '3': '84%',
  '4': '100%',
};

const Stepper: FC<StepperProps> = ({ step, title, subtitle }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Box position="relative" mb={10}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={4}
            position="relative"
            zIndex={10}
          >
            <Step stepNumber={1} active={step >= 1} />
            <Step stepNumber={2} active={step >= 2} />
            <Step stepNumber={3} active={step >= 3} />
            <Step stepNumber={4} active={step >= 4} />
          </Box>
          <Box
            height="1px"
            width="calc(100% - 64px - 50px)"
            sx={{
              bgcolor: (theme) => theme.palette.grey[300],
              transform: 'translate(-50% ,-50%)',
            }}
            position="absolute"
            left="50%"
            top="50%"
            zIndex={0}
          >
            <Box
              bgcolor="green"
              width={percentWidths[step]}
              height="100%"
              sx={{ bgcolor: (theme) => theme.palette.primary.main }}
            />
          </Box>
        </Box>
      </Container>
      <Typography
        component="h1"
        fontWeight={700}
        fontSize={36}
        align="center"
        mb={1.5}
      >
        {title}
      </Typography>
      <Typography fontSize={20} color="#727272" align="center" mb={4}>
        {subtitle}
      </Typography>
    </>
  );
};

export default Stepper;
