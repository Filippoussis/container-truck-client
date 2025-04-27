import { useEffect, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { router } from '@/router';
import { useRegisterComplete } from '@/api/users/mutations';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { SuccessPasswordConfirmModal } from '@/components/modals';
import { RegistrationCompleteProvider } from './RegistrationCompleteProvider';

const RegistrationCompleteConsumer = () => {
  const [open, setOpen] = useState(true);
  const { mutate, isPending, isSuccess } = useRegisterComplete();
  const { getValues, handleSubmit } = useFormContext<{
    email: string;
    password: string;
  }>();

  const onClose = () => {
    setOpen(false);
    router.navigate('/login');
  };
  const onSubmit: SubmitHandler<{ email: string; password: string }> = (data) =>
    mutate(data);

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
    }
  }, [isSuccess]);

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <RHFEmail label="Ваш Логин" disabled />
          <RHFPassword
            label="Ваш Пароль"
            placeholder="Придумайте и введите Пароль"
            autoFocus
          />
          <Button variant="contained" type="submit" loading={isPending}>
            Создать учетную запись
          </Button>
        </Stack>
      </Box>
      <SuccessPasswordConfirmModal
        open={open}
        title="Регистрация успешно завершена!"
        email={getValues().email}
        onClose={onClose}
      />
    </>
  );
};

export const RegistrationComplete = () => {
  return (
    <RegistrationCompleteProvider>
      <RegistrationCompleteConsumer />
    </RegistrationCompleteProvider>
  );
};
