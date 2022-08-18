import { Box } from '@mui/material';
import { useState } from 'react';
import First from './First';
import Stepper from './Stepper';

export type Steps = 1 | 2 | 3 | 4;

const Form = () => {
  const [step, setStep] = useState<Steps>(1);
  const [firstName, setFirstName] = useState<null | string>(null);
  const [displayName, setDisplayName] = useState<null | string>(null);

  const handleSubmitFirst = (firstName: string, displayName: string) => {
    setFirstName(firstName);
    setDisplayName(displayName);
    setStep(2);
  };

  return (
    <Box>
      <Stepper step={step} />
      <First handleSubmitFirst={handleSubmitFirst} />
    </Box>
  );
};

export default Form;
