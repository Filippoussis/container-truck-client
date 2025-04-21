import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

export const ChangePassword = () => {
  return (
    <>
      <Typography variant="h4" mb={3}>
        Смена пароля
      </Typography>
      <Outlet />
    </>
  );
};
