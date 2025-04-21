import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

export const Registration = () => {
  return (
    <>
      <Typography variant="h4" mb={3}>
        Регистрация
      </Typography>
      <Outlet />
    </>
  );
};
