import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { RHFEmail } from '@/shared/components';
import { CreateLoginProvider } from './CreateLoginProvider';

export const CreateLoginProviderConsumer = () => {
  const { handleSubmit } = useFormContext<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = (data) =>
    console.log(data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <RHFEmail label="Ваш Логин" placeholder="Введите свой Email..." />
        <Button variant="contained" type="submit">
          Создать учетную запись
        </Button>
      </Stack>
    </Box>
  );
};

export const CreateLogin = () => {
  return (
    <CreateLoginProvider>
      <CreateLoginProviderConsumer />
    </CreateLoginProvider>
  );
};
