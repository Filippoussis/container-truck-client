import { Link } from 'react-router-dom';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { Logo } from '@/components/Logo';
import { useLogin } from '@/api/users/mutations';
import { LoginProvider } from './LoginProvider';

const LoginConsumer = () => {
  const { mutate, isPending } = useLogin();
  const { handleSubmit } = useFormContext<{
    email: string;
    password: string;
  }>();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (data) =>
    mutate(data);

  return (
    <>
      <Stack
        component="section"
        sx={{
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box component="header" sx={{ textAlign: 'center' }}>
          <Logo />
        </Box>
        <Typography variant="h4" color="error" sx={{ textAlign: 'center' }}>
          Веб-сервис в тестовом режиме
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ marginBottom: 4, textAlign: 'center' }}
          >
            Вход в Личный аккаунт
          </Typography>
          <Stack spacing={2}>
            <RHFEmail label="Ваш Логин" placeholder="Введите свой Email" />
            <RHFPassword label="Ваш Пароль" placeholder="Введите свой Пароль" />
            <Button variant="contained" type="submit" loading={isPending}>
              Войти
            </Button>
          </Stack>
        </Box>
        <Box component="footer" sx={{ textAlign: 'center' }}>
          <Typography variant="body1">
            Eще нет аккаунта?{' '}
            <Button variant="text">
              <Link to={'/register'}>Зарегистрировать</Link>
            </Button>
          </Typography>
          <Typography variant="body1">
            Забыли пароль?{' '}
            <Button variant="text">
              <Link to={'/reset-password'}>Сбросить</Link>
            </Button>
          </Typography>
        </Box>
      </Stack>
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
