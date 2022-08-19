import { Box, Typography } from '@mui/material';
import { ButtonPrimary } from 'components/common/buttons/ButtonPrimary';
import { TextInput } from 'components/common/TextInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface SecondProps {
  handleSubmitSecond: (workspaceName: string, workspaceUrl: string) => void;
}

type FormValues = {
  workspaceName: string;
  workspaceUrl: string;
};

const schema: yup.SchemaOf<FormValues> = yup.object().shape({
  workspaceName: yup
    .string()
    .trim()
    .required('Workspace Name is required')
    .matches(/^[a-zA-Z0-9 ]+$/, 'Invalid input'),
  workspaceUrl: yup
    .string()
    .trim()
    .required('Workspace Url is required')
    .matches(/^[a-zA-Z0-9._]*$/i, {
      message: 'Invalid url',
    })
    .min(5, 'Minimum 5 characters required')
    .max(20, 'Maximum 20 characters allowed'),
});

export const Second: React.FC<SecondProps> = ({ handleSubmitSecond }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: 'onTouched' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSubmitSecond(data.workspaceName, data.workspaceUrl);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder="Eden"
        label="Workspace Name"
        sx={{ mb: 2 }}
        register={register('workspaceName')}
        errorMessage={errors.workspaceName?.message}
      />
      <TextInput
        placeholder="Example"
        label={
          <>
            Workspace URL{' '}
            <Typography
              component="span"
              color="#a8a4a4"
              fontSize={14}
              fontWeight={500}
            >
              (optional)
            </Typography>
          </>
        }
        sx={{ mb: 2 }}
        register={register('workspaceUrl')}
        errorMessage={errors.workspaceUrl?.message}
        StartComponent={
          <Box
            bgcolor="#F8F9FC"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRight="1px solid #cecece"
          >
            <Typography fontSize={14} px={2} fontWeight={500} color="#878ea3">
              www.eden.com/
            </Typography>
          </Box>
        }
      />
      <ButtonPrimary sx={{ width: '100%', py: 2 }} type="submit">
        Create Workspace
      </ButtonPrimary>
    </Box>
  );
};
