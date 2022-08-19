import { Box } from '@mui/material';
import { ButtonPrimary } from 'components/common/buttons/ButtonPrimary';
import { TextInput } from 'components/common/TextInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FirstProps {
  handleSubmitFirst: (firstName: string, displayName: string) => void;
}

type FormValues = {
  firstName: string;
  displayName: string;
};

const schema: yup.SchemaOf<FormValues> = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required('First name is required')
    .matches(/^[a-zA-Z. ]+$/, 'Invalid input'),
  displayName: yup
    .string()
    .trim()
    .required('Display name is required')
    .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i, {
      message: 'Invalid username',
    })
    .min(3, 'Minimum 3 characters required')
    .max(20, 'Maximum 20 characters allowed'),
});

export const First: React.FC<FirstProps> = ({ handleSubmitFirst }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: 'onTouched' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSubmitFirst(data.firstName, data.displayName);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder="Steve Jobs"
        label="First Name"
        sx={{ mb: 2 }}
        register={register('firstName')}
        errorMessage={errors.firstName?.message}
      />
      <TextInput
        placeholder="Steve"
        label="Display Name"
        sx={{ mb: 2 }}
        register={register('displayName')}
        errorMessage={errors.displayName?.message}
      />
      <ButtonPrimary sx={{ width: '100%', py: 2 }} type="submit">
        Create Workspace
      </ButtonPrimary>
    </Box>
  );
};
