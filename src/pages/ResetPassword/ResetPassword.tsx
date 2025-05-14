import { Link, Outlet } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Logo } from '@/components/Logo';

export const ResetPassword = () => {
  return (
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
      <Outlet />
      <Box component="footer" sx={{ textAlign: 'center' }}>
        <Typography variant="body1">
          Вспомнили пароль?{' '}
          <Button variant="text">
            <Link to={'/login'}>Войти</Link>
          </Button>
        </Typography>
      </Box>
    </Stack>
  );
};
