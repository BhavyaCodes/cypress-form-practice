import { Box } from "@mui/material";
import React from "react";
import { FC } from "react";
import Step from "./Step";

type Steps = 1 | 2 | 3 | 4;

interface StepperProps {
  step: Steps;
}

const percentWidths: Record<Steps, string> = {
  "1": "16%",
  "2": "50%",
  "3": "84%",
  "4": "100%",
};

const Stepper: FC<StepperProps> = ({ step }) => {
  return (
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
          transform: "translate(-50% ,-50%)",
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
  );
};

export default Stepper;
