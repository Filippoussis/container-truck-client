import { useEffect, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { useConfirmRegisterUser } from '@/api/users/mutations';
import { router } from '@/router';
import { ConfirmRegistrationProvider } from './ConfirmRegistrationProvider';
import { SuccessModal } from './components/SuccessModal';

const ConfirmRegistrationConsumer = () => {
  const { mutate, isPending, isSuccess } = useConfirmRegisterUser();
  const [open, setOpen] = useState(true);
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
      <SuccessModal open={open} onClose={onClose} email={getValues().email} />
    </>
  );
};

export const ConfirmRegistration = () => {
  return (
    <ConfirmRegistrationProvider>
      <ConfirmRegistrationConsumer />
    </ConfirmRegistrationProvider>
  );
};
