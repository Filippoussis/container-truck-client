import * as React from 'react';
import { Box, Modal as MuiModal } from '@mui/material';

import styles from './Modal.module.css';

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ open, onClose, children }: Props) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box className={styles.ModalContent}>
        <Box p={2}>{children}</Box>
      </Box>
    </MuiModal>
  );
};
