import { Box, Typography } from "@mui/material";
import { ButtonPrimary } from "components/common/buttons/ButtonPrimary";
import { TextInput } from "components/common/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FirstProps {
  // : string;
}

type FormValues = {
  first_name: string;
  display_name: string;
};

const schema: yup.SchemaOf<FormValues> = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required("First name is required")
    .matches(/^([A-Za-z]){0}[A-Za-z.]+\s*$/i, "Invalid input"),
  display_name: yup
    .string()
    .trim()
    .required("Display name is required")
    .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i, {
      message: "Invalid username",
    })
    .min(3, "Minimum 3 characters required")
    .max(20, "Maximum 20 characters allowed"),
});

const First: React.FC<FirstProps> = ({}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: "onTouched" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography
        component="h1"
        fontWeight={700}
        fontSize={36}
        align="center"
        mb={1.5}
      >
        Welcome! First things first...
      </Typography>
      <Typography fontSize={20} color="#727272" align="center" mb={4}>
        You can always change them later
      </Typography>
      <TextInput
        placeholder="Steve Jobs"
        label="First Name"
        sx={{ mb: 2 }}
        register={register("first_name")}
        errorMessage={errors.first_name?.message}
      />
      <TextInput
        placeholder="Steve"
        label="Display Name"
        sx={{ mb: 2 }}
        register={register("display_name")}
        errorMessage={errors.display_name?.message}
      />
      <ButtonPrimary sx={{ width: "100%", py: 2 }} type="submit">
        Create Workspace
      </ButtonPrimary>
    </Box>
  );
};

export default First;
