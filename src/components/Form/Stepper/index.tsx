import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Container maxWidth="sm">
        <Box
          position="relative"
          sx={{
            mb: {
              xs: 5,
              md: 10,
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={4}
            position="relative"
            zIndex={10}
            sx={{
              px: {
                xs: 2,
                md: 4,
              },
            }}
          >
            <Step stepNumber={1} active={step >= 1} />
            <Step stepNumber={2} active={step >= 2} />
            <Step stepNumber={3} active={step >= 3} />
            <Step stepNumber={4} active={step >= 4} />
          </Box>
          <Box
            height="1px"
            width={`calc(100% - ${matches ? '32' : '64'}px - ${
              matches ? '30' : '50'
            }px)`}
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
        // fontSize={36}
        align="center"
        mb={1.5}
        // sx={{ px: 2 }}
        px={1}
        sx={{
          fontSize: {
            xs: 28,
            md: 36,
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        color="#727272"
        align="center"
        mb={4}
        sx={{
          fontSize: {
            xs: 16,
            md: 20,
          },
        }}
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default Stepper;
