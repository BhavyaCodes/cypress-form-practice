import { Box, SxProps, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sx?: SxProps<any>;
  register?: UseFormRegisterReturn;
  errorMessage?: ReactNode;
  width?: number | string;
  StartComponent?: ReactNode;
  label?: ReactNode;
}

const StyledBox = styled(Box)({
  border: "1px solid #cecece",
  borderRadius: "5px",
  backgroundColor: "#fff",
  overflow: "hidden",
  "& input": {
    padding: "10px 12px",
    font: "inherit",
    border: "none",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
    width: "100%",
    "&::placeholder": {
      fontSize: "14px",
      color: "#7A869A",
    },
    flexGrow: 1,
  },
  display: "flex",
});

export const TextInput: FC<TextInputProps> = ({
  sx,
  register,
  errorMessage,
  width,
  StartComponent,
  label,
  ...props
}) => {
  return (
    <Box width={width} sx={sx}>
      {!!label && (
        <Typography color="#596177" fontWeight={600} fontSize={14} mb={0.5}>
          {label}
        </Typography>
      )}
      <StyledBox>
        {!!StartComponent && StartComponent}
        <input {...props} {...register} />
      </StyledBox>
      <Box color="#FF6446" fontSize={12} height={16} pl={1}>
        {errorMessage}
      </Box>
    </Box>
  );
};
