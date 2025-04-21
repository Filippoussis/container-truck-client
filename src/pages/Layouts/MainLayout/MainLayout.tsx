import { Outlet, useLocation } from 'react-router-dom';
import { Stack, Typography, ToggleButton } from '@mui/material';
import { Funnel, Menu } from 'lucide-react';

export const MainLayout = () => {
  const { pathname } = useLocation();
  const isRoot = pathname === '/';

  return (
    <>
      <Stack
        component="header"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">LoLo</Typography>
        <Stack direction="row" spacing={1}>
          {isRoot && (
            <ToggleButton value="check">
              <Funnel />
            </ToggleButton>
          )}
          <ToggleButton value="check">
            <Menu />
          </ToggleButton>
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
};
