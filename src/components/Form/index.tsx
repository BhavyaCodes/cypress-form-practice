import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { First } from './First';
import Fourth from './Fourth';
import { Second } from './Second';
import Stepper from './Stepper';
import Third from './Third';

export type Steps = 1 | 2 | 3 | 4;
export type TeamType = 'myself' | 'team';
const Form = () => {
  const [step, setStep] = useState<Steps>(1);
  const [firstName, setFirstName] = useState<null | string>(null);
  const [displayName, setDisplayName] = useState<null | string>(null);
  const [workspaceName, setWorkspaceName] = useState<null | string>(null);
  const [workspaceUrl, setWorkspaceUrl] = useState<null | string>(null);
  const [teamType, setTeamType] = useState<null | TeamType>(null);

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

  const handleSubmitThird = (teamType: TeamType) => {
    setTeamType(teamType);
    setStep(4);
  };

  const titles: Record<Steps, [string, string] | null> = {
    1: ['Welcome! First things first...', 'You can always change them later'],
    2: [
      "Let's set up a home for all your work",
      'You can always create another workspace later',
    ],
    3: [
      'How are you planning to use Eden?',
      "We'll streamline your setup experience accordingly",
    ],
    4: null,
  };

  useEffect(() => {
    if (step == 4) {
      console.log(firstName);
      console.log(displayName);
      console.log(workspaceName);
      console.log(workspaceUrl);
      console.log(teamType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <Box>
      <Stepper
        step={step}
        title={titles[step]?.[0]}
        subtitle={titles[step]?.[1]}
      />
      <Container maxWidth="sm">
        {step == 1 && <First handleSubmitFirst={handleSubmitFirst} />}
        {step == 2 && <Second handleSubmitSecond={handleSubmitSecond} />}
        {step == 3 && <Third handleSubmitThird={handleSubmitThird} />}
        {step == 4 && <Fourth displayName={displayName!} />}
      </Container>
    </Box>
  );
};

export default Form;
