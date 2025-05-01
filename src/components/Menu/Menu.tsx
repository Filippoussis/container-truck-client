import { useState } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  ToggleButton,
} from '@mui/material';
import {
  Blocks,
  Grid2x2,
  Grid2x2Plus,
  LogOut,
  Menu as MenuIcon,
} from 'lucide-react';
import { router } from '@/router';
import { useLogout } from '@/api/users/mutations';

export const Menu = () => {
  const { mutate } = useLogout();
  const [open, setOpen] = useState(false);

  const handleToggleMenu = (state: boolean) => {
    setOpen(state);
  };

  const handleClickMenuItem = (to: string) => {
    router.navigate(to);
  };

  const handleLogout = () => {
    mutate();
  };

  return (
    <>
      <ToggleButton value="check" onClick={() => handleToggleMenu(true)}>
        <MenuIcon />
      </ToggleButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => handleToggleMenu(true)}
        onClose={() => handleToggleMenu(false)}
      >
        <Stack
          sx={{ width: 250, height: '100%' }}
          onClick={() => handleToggleMenu(false)}
          onKeyDown={() => handleToggleMenu(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClickMenuItem('/')}>
                <ListItemIcon>
                  <Grid2x2 />
                </ListItemIcon>
                <ListItemText primary="Все грузы" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClickMenuItem('/')}>
                <ListItemIcon>
                  <Blocks />
                </ListItemIcon>
                <ListItemText primary="Мои грузы" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleClickMenuItem('/create-order')}
              >
                <ListItemIcon>
                  <Grid2x2Plus />
                </ListItemIcon>
                <ListItemText primary="Добавить груз" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List sx={{ marginTop: 'auto' }}>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogOut />
                </ListItemIcon>
                <ListItemText primary="Выход" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </SwipeableDrawer>
    </>
  );
};
