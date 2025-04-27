import { Button, Stack, Typography } from '@mui/material';
import { CircleCheckBig } from 'lucide-react';
import { Modal } from '@/shared/ui/Modal';

type Props = {
  open: boolean;
  onClose: () => void;
  email: string;
};

export const SuccessModal = ({ open, onClose, email }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack spacing={2} alignItems="center">
        <CircleCheckBig size={48} color="#2e7d32" />
        <Typography variant="h6" component="h2">
          Регистрация успешно завершена!
        </Typography>
        <Typography>
          Ваш логин для входа в приложение: <br />
          <b>{email}</b>
        </Typography>
        <Button fullWidth variant="contained" color="success" onClick={onClose}>
          Войти
        </Button>
      </Stack>
    </Modal>
  );
};
