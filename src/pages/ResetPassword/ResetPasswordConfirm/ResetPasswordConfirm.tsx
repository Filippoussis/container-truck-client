import { useEffect, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { router } from '@/router';
import { useResetPasswordConfirm } from '@/api/users/mutations';
import { SuccessPasswordConfirmModal } from '@/components/modals';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { ResetPasswordConfirmProvider } from './ResetPasswordConfirmProvider';

const ResetPasswordConfirmConsumer = () => {
  const [open, setOpen] = useState(true);
  const { mutate, isPending, isSuccess } = useResetPasswordConfirm();
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
            Сменить пароль
          </Button>
        </Stack>
      </Box>
      <SuccessPasswordConfirmModal
        open={open}
        title="Пароль успешно изменен!"
        email={getValues().email}
        onClose={onClose}
      />
    </>
  );
};

export const ResetPasswordConfirm = () => {
  return (
    <ResetPasswordConfirmProvider>
      <ResetPasswordConfirmConsumer />
    </ResetPasswordConfirmProvider>
  );
};
