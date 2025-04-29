import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Snackbar } from '@/shared/ui';

export const RootLayout = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ height: '100%', paddingTop: '16px', paddingBottom: '16px' }}
    >
      <Outlet />
      <Snackbar />
    </Container>
  );
};
