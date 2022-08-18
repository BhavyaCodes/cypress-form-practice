import { Box, Typography } from "@mui/material";
import { ButtonPrimary } from "components/common/buttons/ButtonPrimary";
import { TextInput } from "components/common/TextInput";

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

      <TextInput placeholder="Steve Jobs" label="First Name" sx={{ mb: 2 }} />
      <TextInput placeholder="Steve" label="Display Name" sx={{ mb: 2 }} />
      <ButtonPrimary sx={{ width: "100%", py: 2 }} type="submit">
        Create Workspace
      </ButtonPrimary>
    </Box>
  );
};

export default First;
