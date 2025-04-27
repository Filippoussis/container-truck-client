import { Link, Outlet } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

export const ChangePassword = () => {
  return (
    <Stack component="section" sx={{ height: '100%' }}>
      <Typography variant="h4" mb={3}>
        Смена пароля
      </Typography>
      <Outlet />
      <Box component="footer" sx={{ marginTop: 'auto', textAlign: 'center' }}>
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
