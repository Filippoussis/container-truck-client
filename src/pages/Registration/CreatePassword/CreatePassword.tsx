import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { CreatePasswordProvider } from './CreatePasswordProvider';

const CreatePasswordConsumer = () => {
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
          Создать учетную запись
        </Button>
      </Stack>
    </Box>
  );
};

export const CreatePassword = () => {
  return (
    <CreatePasswordProvider>
      <CreatePasswordConsumer />
    </CreatePasswordProvider>
  );
};
