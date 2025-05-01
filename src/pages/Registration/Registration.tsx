import { Link, Outlet } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Logo } from '@/components/Logo';

export const Registration = () => {
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
      <Outlet />
      <Box component="footer" sx={{ textAlign: 'center' }}>
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
