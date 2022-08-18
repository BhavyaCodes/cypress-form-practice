import { Box } from '@mui/material';
import { useState } from 'react';
import { First } from './First';
import { Second } from './Second';
import Stepper from './Stepper';

export type Steps = 1 | 2 | 3 | 4;

const Form = () => {
  const [step, setStep] = useState<Steps>(1);
  const [firstName, setFirstName] = useState<null | string>(null);
  const [displayName, setDisplayName] = useState<null | string>(null);
  const [workspaceName, setWorkspaceName] = useState<null | string>(null);
  const [workspaceUrl, setWorkspaceUrl] = useState<null | string>(null);

  const handleSubmitFirst = (firstName: string, displayName: string) => {
    setFirstName(firstName);
    setDisplayName(displayName);
    setStep(2);
  };

  const handleSubmitSecond = (workspaceName: string, workspaceUrl: string) => {
    setWorkspaceName(workspaceName);
    setWorkspaceUrl(workspaceUrl);
    setStep(3);
  };

  const titles: Record<Steps, [string, string] | null> = {
    1: ['Welcome! First things first...', 'You can always change them later'],
    2: [
      "Let's set up a home for all your work",
      'You can always create another workspace later',
    ],
    3: null,
    4: null,
  };

  return (
    <Box>
      <Stepper
        step={step}
        title={titles[step]?.[0]}
        subtitle={titles[step]?.[1]}
      />
      {step == 1 && <First handleSubmitFirst={handleSubmitFirst} />}
      {step == 2 && <Second handleSubmitSecond={handleSubmitSecond} />}
    </Box>
  );
};

export default Form;
