import type { AlertColor } from '@mui/material/Alert';
import type { SnackbarOrigin } from '@mui/material/Snackbar';
import { ActionType } from './constants';

export type State = {
  open: boolean;
  message: string;
  severity?: AlertColor;
  vertical?: SnackbarOrigin['vertical'];
};

export type API = {
  showSnack: (state: State) => void;
  hideSnack: () => void;
};

export type ACTION_TYPE = (typeof ActionType)[keyof typeof ActionType];
