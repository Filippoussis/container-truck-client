import { useEffect, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
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
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <RHFEmail label="Ваш Логин" placeholder="Введите свой Email" />
          <Button variant="contained" type="submit" loading={isPending}>
            Отправить
          </Button>
        </Stack>
      </Box>
      <SuccessEmailConfirmModal
        open={open}
        email={getValues().email}
        onClose={onClose}
      />
    </>
  );
};

export const RegistrationInit = () => {
  return (
    <RegistrationInitProvider>
      <RegistrationInitConsumer />
    </RegistrationInitProvider>
  );
};
