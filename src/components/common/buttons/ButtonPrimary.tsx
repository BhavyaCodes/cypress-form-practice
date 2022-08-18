import { styled } from "@mui/system";

export const ButtonPrimary = styled("button")<{ color?: string }>(
  ({ theme, color }) => ({
    textDecoration: "none",
    fontFamily: "inherit",
    fontSize: 16,
    WebkitAppearance: "none",
    MozAppearance: "none",
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: theme.palette.primary.main,
    border: "none",
    color: "#fff",
    fontWeight: 500,
    paddingLeft: 24,
    paddingRight: 24,
    cursor: "pointer",
    borderRadius: "5px",
  })
);
