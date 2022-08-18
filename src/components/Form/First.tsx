import { Box, Typography } from "@mui/material";

interface FirstProps {
  // : string;
}

const First: React.FC<FirstProps> = ({}) => {
  return (
    <Box component="form">
      <Typography
        component="h1"
        fontWeight={700}
        fontSize={36}
        align="center"
        mb={1.5}
      >
        Welcome! First things first...
      </Typography>
      <Typography fontSize={20} color="#727272" align="center">
        You can always change them later
      </Typography>
    </Box>
  );
};

export default First;
