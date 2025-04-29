import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import { useSnackAPI, useSnackState } from '@/services/SnackProvider';

export const Snackbar = () => {
  const { hideSnack } = useSnackAPI();
  const { open, message, severity, vertical = 'top' } = useSnackState();

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical, horizontal: 'center' }}
      open={open}
      autoHideDuration={5000}
      onClose={hideSnack}
    >
      <Alert
        onClose={hideSnack}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
