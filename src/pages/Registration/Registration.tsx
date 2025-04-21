import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export const Registration = () => {
  const { pathname } = useLocation();
  const isRootRegister = pathname.replaceAll('/', '') === 'register';

  return (
    <>
      <Typography variant="h4" mb={3}>
        Регистрация
      </Typography>
      <Outlet />
      {isRootRegister && (
        <Typography variant="body1">
          Уже есть аккаунт?{' '}
          <Button variant="text">
            <Link to={'/login'}>Войти</Link>
          </Button>
        </Typography>
      )}
    </>
  );
};
