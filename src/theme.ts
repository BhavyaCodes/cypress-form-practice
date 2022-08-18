import { createTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#7E00E3",
    },
    // secondary: {
    //   main: "#19857b",
    // },
    // error: {
    //   main: red.A400,
    // },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;
