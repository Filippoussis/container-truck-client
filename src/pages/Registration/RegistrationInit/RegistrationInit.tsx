import { useEffect, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Button, Box, Stack, Typography } from '@mui/material';
import { router } from '@/router';
import { useRegisterInit } from '@/api/users/mutations';
import { RHFEmail } from '@/shared/components';
import { SuccessEmailConfirmModal } from '@/components/modals';
import { RegistrationInitProvider } from './RegistrationInitProvider';

const RegistrationInitConsumer = () => {
  const [open, setOpen] = useState(false);
  const { mutate, isPending, isSuccess } = useRegisterInit();
  const { getValues, handleSubmit } = useFormContext<{
    email: string;
  }>();

  const onClose = () => {
    setOpen(false);
    router.navigate('/login');
  };
  const onSubmit: SubmitHandler<{ email: string }> = (data) => mutate(data);

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
    }
  }, [isSuccess]);

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ marginBottom: 4, textAlign: 'center' }}
      >
        Регистрация аккаунта
      </Typography>
      <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <RHFEmail label="Ваш Логин" placeholder="Введите свой Email" />
        <Button variant="contained" type="submit" loading={isPending}>
          Отправить
        </Button>
      </Stack>
      <SuccessEmailConfirmModal
        open={open}
        email={getValues().email}
        onClose={onClose}
      />
    </Box>
  );
};

export const RegistrationInit = () => {
  return (
    <RegistrationInitProvider>
      <RegistrationInitConsumer />
    </RegistrationInitProvider>
  );
};
