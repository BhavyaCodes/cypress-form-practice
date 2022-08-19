import DoneIcon from '@mui/icons-material/Done';
import { Box, Typography } from '@mui/material';
import { ButtonPrimary } from 'components/common/buttons/ButtonPrimary';
import { FC } from 'react';

const Fourth: FC<{ displayName: string }> = ({ displayName }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={4}>
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.primary.main,
          borderRadius: 50,
        }}
        height={70}
        width={70}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={5}
      >
        <DoneIcon sx={{ color: '#fff' }} />
      </Box>
      <Typography
        component="h1"
        fontWeight={700}
        fontSize={36}
        align="center"
        mb={1.5}
      >
        {`Congratulations, ${displayName}`}
      </Typography>
      <Typography fontSize={18} color="#727272" align="center" mb={4}>
        You have completed onboarding, you can start using the Eden!
      </Typography>
      <ButtonPrimary sx={{ width: '100%', py: 2 }} type="button">
        Launch Eden
      </ButtonPrimary>
    </Box>
  );
};

export default Fourth;
