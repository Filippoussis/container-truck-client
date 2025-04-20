import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <Container
      component="div"
      maxWidth="md"
      sx={{ paddingTop: '16px', paddingBottom: '16px' }}
    >
      <Outlet />
    </Container>
  );
};
