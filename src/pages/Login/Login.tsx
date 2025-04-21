import { Link } from 'react-router-dom';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { LoginProvider } from './LoginProvider';

export const LoginConsumer = () => {
  const { handleSubmit } = useFormContext<{
    email: string;
    password: string;
  }>();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (data) =>
    console.log(data);

  return (
    <>
      <Typography variant="h4" mb={3}>
        Вход в Личный аккаунт
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <RHFEmail label="Ваш Логин" placeholder="Введите свой Email" />
          <RHFPassword label="Ваш Пароль" placeholder="Введите свой Пароль" />
          <Button variant="contained" type="submit">
            Войти
          </Button>
        </Stack>
      </Box>
      <Typography variant="body1">
        Eще нет аккаунта?{' '}
        <Button variant="text">
          <Link to={'/register'}>Зарегистрировать</Link>
        </Button>
      </Typography>
    </>
  );
};

export const Login = () => {
  return (
    <LoginProvider>
      <LoginConsumer />
    </LoginProvider>
  );
};
