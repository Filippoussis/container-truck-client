import { Link, Outlet, useLocation } from 'react-router-dom';
import { Stack, Typography, ToggleButton } from '@mui/material';
import { Funnel } from 'lucide-react';
import { Menu } from '@/components/Menu';

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
        <Typography component={Link} variant="h3" to={'/'}>
          LoLo
        </Typography>
        <Stack direction="row" spacing={1}>
          {isRoot && (
            <ToggleButton value="check">
              <Funnel />
            </ToggleButton>
          )}
          <Menu />
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
};
