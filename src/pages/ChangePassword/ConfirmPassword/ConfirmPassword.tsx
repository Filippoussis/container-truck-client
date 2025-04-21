import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { ConfirmPasswordProvider } from './ConfirmPasswordProvider';

const ConfirmPasswordConsumer = () => {
  const { handleSubmit } = useFormContext<{
    email: string;
    password: string;
  }>();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (data) =>
    console.log(data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <RHFEmail label="Ваш Логин" disabled />
        <RHFPassword
          label="Ваш Пароль"
          placeholder="Придумайте и введите Пароль"
          autoFocus
        />
        <Button variant="contained" type="submit">
          Сменить пароль
        </Button>
      </Stack>
    </Box>
  );
};

export const ConfirmPassword = () => {
  return (
    <ConfirmPasswordProvider>
      <ConfirmPasswordConsumer />
    </ConfirmPasswordProvider>
  );
};
