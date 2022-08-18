import React from "react";
import { FC } from "react";

interface StepperProps {
  step: 1 | 2 | 3 | 4;
}

const Stepper: FC<StepperProps> = ({ step }) => {
  return <>Stepper</>;
};

export default Stepper;
