import { useEffect, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { RHFEmail } from '@/shared/components';
import { useRequestRegisterUser } from '@/api/users/mutations';
import { router } from '@/router';
import { RequestRegistrationProvider } from './RequestRegistrationProvider';
import { SuccessModal } from './components/SuccessModal';

const RequestRegistrationConsumer = () => {
  const [open, setOpen] = useState(true);
  const { mutate, isPending, isSuccess } = useRequestRegisterUser();
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
      <SuccessModal open={open} onClose={onClose} email={getValues().email} />
    </>
  );
};

export const RequestRegistration = () => {
  return (
    <RequestRegistrationProvider>
      <RequestRegistrationConsumer />
    </RequestRegistrationProvider>
  );
};
