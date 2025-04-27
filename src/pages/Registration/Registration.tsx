import { Link, Outlet } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

export const Registration = () => {
  return (
    <Stack component="section" sx={{ height: '100%' }}>
      <Typography variant="h4" component="h1" mb={3}>
        Регистрация
      </Typography>
      <Outlet />
      <Box component="footer" sx={{ marginTop: 'auto', textAlign: 'center' }}>
        <Typography variant="body1">
          Уже есть аккаунт?{' '}
          <Button variant="text">
            <Link to={'/login'}>Войти</Link>
          </Button>
        </Typography>
      </Box>
    </Stack>
  );
};
