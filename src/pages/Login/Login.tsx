import { Link } from 'react-router-dom';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import { RHFEmail, RHFPassword } from '@/shared/components';
import { useLoginUser } from '@/api/users/mutations';
import { LoginProvider } from './LoginProvider';

const LoginConsumer = () => {
  const loginUser = useLoginUser();
  const { handleSubmit } = useFormContext<{
    email: string;
    password: string;
  }>();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (data) =>
    loginUser.mutate(data);

  return (
    <Stack component="section" sx={{ height: '100%' }}>
      <Typography variant="h4" component="h1" mb={3}>
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
      <Box component="footer" sx={{ marginTop: 'auto', textAlign: 'center' }}>
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
  );
};

export const Login = () => {
  return (
    <LoginProvider>
      <LoginConsumer />
    </LoginProvider>
  );
};
