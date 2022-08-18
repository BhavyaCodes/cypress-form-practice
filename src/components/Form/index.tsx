import { Box } from "@mui/material";
import First from "./First";
import Stepper from "./Stepper";

const Form = () => {
  return (
    <Box>
      <Stepper step={4} />
      <First />
    </Box>
  );
};

export default Form;
