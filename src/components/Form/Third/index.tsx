import { Grid } from '@mui/material';
import { FC, useState } from 'react';
import Card from './Card';
import single from 'assets/single.png';
import group from 'assets/group.png';
import { ButtonPrimary } from 'components/common/buttons/ButtonPrimary';
import { TeamType } from '..';

interface ThirdProps {
  handleSubmitThird: (teamType: TeamType) => void;
}

const Third: FC<ThirdProps> = ({ handleSubmitThird }) => {
  const [selectedType, setSelectedType] = useState<TeamType | null>(null);
  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Card
            icon={single}
            iconAlt="single person icon"
            title="For myself"
            onClick={() => setSelectedType('myself')}
            selected={selectedType == 'myself'}
          >
            Write better. Think more clearly. Stay organized
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            icon={group}
            iconAlt="people group icon"
            title="With my team"
            selected={selectedType == 'team'}
            onClick={() => setSelectedType('team')}
          >
            Wikis, docs, tasks & projects, all in one place.
          </Card>
        </Grid>
      </Grid>
      <ButtonPrimary
        sx={{ width: '100%', py: 2, mt: 5 }}
        type="button"
        disabled={!selectedType}
        onClick={() => handleSubmitThird(selectedType)}
      >
        Create Workspace
      </ButtonPrimary>
    </>
  );
};

export default Third;
