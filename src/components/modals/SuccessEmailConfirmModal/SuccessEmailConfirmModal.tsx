import { Stack, Typography } from '@mui/material';
import { MailWarning } from 'lucide-react';
import { Modal } from '@/shared/ui/Modal';

type Props = {
  open: boolean;
  onClose: () => void;
  email: string;
};

export const SuccessEmailConfirmModal = ({ open, onClose, email }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack spacing={2} alignItems="center">
        <MailWarning size={48} color="#1976d2" />
        <Typography variant="h6" component="h2">
          Перейдите по ссылке из письма
        </Typography>
        <Typography>
          На Вашу электронную почту: <br />
          <b>{email}</b> <br />
          направлено письмо с персональной ссылкой.
          <br></br>
          <small>
            <i>Если во входящих нет, проверьте спам</i>
          </small>
        </Typography>
      </Stack>
    </Modal>
  );
};
